import { User, StockData } from 'src/models';

export async function getStockData(user: User, index: number) {
  const symbols = Array.from(new Set(Object.keys(user.lists[index].holdings)));

  const requests: string[][] = [[], [], [], [], []];

  for (let i = 0; i < symbols.length; i++) {
    if (i < 10) requests[0].push(symbols[i]);
    else if (i < 20) requests[1].push(symbols[i]);
    else if (i < 30) requests[2].push(symbols[i]);
    else if (i < 40) requests[3].push(symbols[i]);
    else if (i < 50) requests[4].push(symbols[i]);
  }

  const promises: Promise<any>[] = [];

  for (const request of requests) {
    if (!request[0]) break;

    promises.push(fetch(`http://localhost:8000/api/get?stocks=${encodeURIComponent(JSON.stringify(request))}`));
  }

  await Promise.all(promises);
  const resolvedPromises = await Promise.all(promises.map(async (promise) => (await promise).json()));

  const stocks: { [key: string]: any } = {};

  resolvedPromises.forEach((promise: any) => {
    Object.entries(promise.stocks).forEach(([key, value]) => {
      stocks[key] = value;
    });
  });

  return stocks as { [key: string]: StockData };
}
