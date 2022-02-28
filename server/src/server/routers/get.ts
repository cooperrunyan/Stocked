import { oak, env } from '../../deps.ts';
import { Data } from '../../types.ts';
env();

const requests: {
  at: number;
  data: Data;
}[] = [];

setInterval(purge, 1000 * 60 * 5);

const counters = [0, 0, 0];

export const get = new oak.Router({ prefix: '/get' });
get.get('/', async (ctx) => {
  let jsonerr = false;
  const symbols: string[] = JSON.parse(ctx.request.url.searchParams.getAll('stocks')[0]);

  if (jsonerr) return;

  const returnData: { [key: string]: Data } = {};

  for (const symbol of symbols) {
    const data = await (async () => {
      for (const request of requests) {
        if (request.data.symbol === symbol) {
          if ((Date.now() - request.at) / 1000 / 60 / 60 < 4) return request.data;
        }
      }
    })();

    if (data) {
      returnData[symbol] = data;
      continue;
    }
  }

  const needsToBeFulfilled = [];

  for (const symbol of symbols) {
    if (!returnData[symbol]) needsToBeFulfilled.push(symbol);
  }

  const data = await getStocksData(needsToBeFulfilled, getApiKey() || 0);

  const requestedData: { [key: string]: Data } = {};

  for (const request of requests) {
    for (const symbol of symbols) {
      if (request.data.symbol === symbol) requestedData[symbol] = request.data;
    }
  }

  ctx.response.body = {
    stocks: requestedData,
  };
});

async function getStocksData(symbols: string[], apikeyNumber: number): Promise<any> {
  const apikey = Deno.env.get(`API_KEY${apikeyNumber}`);

  if (!apikey) return 500;

  if (!Array.isArray(symbols)) return 400;
  if (!symbols[0]) return 'Already fulfilled';
  for (const symbol of symbols) {
    if (typeof symbol !== 'string') return 400;
  }

  symbols = symbols.map((symbol) => symbol.toUpperCase()).slice(0, 10);
  const res = await fetch(`https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symbols.join('%2C')}`, {
    headers: {
      'x-api-key': apikey,
    },
  });

  const data: {
    quoteResponse: {
      result: Data[];
      error: any;
    };
    message: any;
  } = await res.json();

  if (data.message === 'Limit Exceeded') return getStocksData(symbols, apikeyNumber + 1);

  counters[apikeyNumber]++;

  if (data?.quoteResponse?.result && Array.isArray(data?.quoteResponse?.result) && data?.quoteResponse?.result[0]) {
    resultLoop: for (const result of data.quoteResponse.result) {
      for (const request of requests) {
        if (request.data.symbol === result.symbol) {
          request.data = result;
          continue resultLoop; // that record is updated
        }
      }

      requests.push({
        at: Date.now(),
        data: result,
      });
    }
    return requests;
  }

  return data;
}

function purge() {
  for (const request of requests) {
    if ((Date.now() - request.at) / 1000 / 60 / 60 > 4) {
      requests.splice(requests.indexOf(request), 1);
    }
  }
}

function getApiKey() {
  purge();
  for (const counter of counters) {
    if (counter < 100) return counters.indexOf(counter);
  }
}
