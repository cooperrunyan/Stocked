import { oak, env } from '../../deps.ts';
env();

const requests: {
  at: number;
  data: Data;
}[] = [];

setInterval(purge, 1000 * 60 * 5);

const counters = [0, 0, 0];

export const getInfo = new oak.Router({ prefix: '/get' });
getInfo.get('/', async (ctx) => {
  const symbols: string[] = JSON.parse(ctx.request.url.searchParams.getAll('stocks')[0]);

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
  console.log(data);

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

type Data = {
  language: string;
  region: string;
  quoteType: string;
  quoteSourceName: string;
  triggerable: boolean;
  customPriceAlertConfidence: string;
  currency: string;
  financialCurrency: string;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekLowChangePercent: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  dividendDate: number;
  earningsTimestamp: number;
  earningsTimestampStart: number;
  earningsTimestampEnd: number;
  trailingAnnualDividendRate: number;
  trailingPE: number;
  trailingAnnualDividendYield: number;
  epsTrailingTwelveMonths: number;
  epsForward: number;
  epsCurrentYear: number;
  priceEpsCurrentYear: number;
  sharesOutstanding: number;
  bookValue: number;
  fiftyDayAverage: number;
  fiftyDayAverageChange: number;
  fiftyDayAverageChangePercent: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  marketCap: number;
  forwardPE: number;
  priceToBook: number;
  sourceInterval: number;
  exchangeDataDelayedBy: number;
  pageViewGrowthWeekly: number;
  exchange: string;
  shortName: string;
  longName: string;
  messageBoardId: string;
  exchangeTimezoneName: string;
  exchangeTimezoneShortName: string;
  gmtOffSetMilliseconds: number;
  market: string;
  esgPopulated: boolean;
  marketState: string;
  averageAnalystRating: string;
  tradeable: boolean;
  firstTradeDateMilliseconds: number;
  priceHint: number;
  postMarketChangePercent: number;
  postMarketTime: number;
  postMarketPrice: number;
  postMarketChange: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: number;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  bid: number;
  ask: number;
  bidSize: number;
  askSize: number;
  fullExchangeName: string;
  displayName: string;
  symbol: string;
};
