import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Link } from 'src/components';
import { User } from 'src/models';
import style from 'style/out/components/Lists.module.css';

import Add from './Add.svg';

type StockData = {
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

interface List {
  name: string;
  holdings: {
    symbol: string;
    shares: number;
    initialPrice: number;
    currentPrice: number;
    buyDate: Date;
  }[];
}

export function List() {
  const router = useRouter();
  const index = +(router.query.id || 0);

  const [data, setData] = useState<User['lists'] | null>(null);
  const [total, setTotal] = useState(0);

  const [stocksData, setStocksData] = useState<{ [key: string]: StockData } | null>(null);

  useEffect(() => {
    (async () => {
      const token = /jwt=.+\n/
        .exec((document.cookie + ';').split(';').join('\n'))
        ?.at(0)
        ?.replaceAll('jwt=', '')
        .replace(';', '');

      const res = await fetch(`http://localhost:8000/api/users?token=${token}`, {
        method: 'GET',
      });

      const response = await res.json();

      if (res.status !== 200) return setData(null);

      const tempData: User['lists'] = response.user.lists;
      const symbols = Array.from(new Set(Object.keys(tempData[index].holdings)));

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
      const d = await Promise.all(promises.map(async (promise) => (await promise).json()));

      const stocks: { [key: string]: any } = {};

      d.forEach((da: any) => {
        Object.entries(da.stocks).forEach(([key, value]) => {
          stocks[key] = value;
        });
      });

      setData(tempData);
      setStocksData(stocks);
    })();
  }, []);

  useEffect(() => {
    let total = 0;

    if (!stocksData || !data) return;

    // console.log({ stocksData, data });

    // Object.entries(stocksData).forEach(([key, value]) => {
    //   let individual = 0;
    //   let shares = 0;

    //   for (const [symbol, holding] of Object.entries(data[index].holdings)) {
    //     if (key === symbol) {
    //       individual = value.bid;
    //       shares = holding.volumes.length;
    //     }
    //   }

    //   console.log({ individual, shares });
    //   total += individual * shares;
    // });

    // setTotal(total);
    for (const [s, holding] of Object.entries(data[index].holdings)) {
      let sharePrice = 0;
      let shares = 0;

      Object.entries(stocksData).forEach(([symbol, stockData]) => {
        if (s === symbol) {
          sharePrice = stockData.bid;
          shares = holding.volumes.length;
        }
      });

      total += shares * sharePrice;
    }

    setTotal(total);
  });

  return (
    <Container>
      {data && (
        <div className={style.lists}>
          <ul>
            {data.map((list, i) => (
              <li key={i}>
                <Link className={i === index ? style.active : ''} href={`/lists/${i}`}>
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className={style.add}>
            <Add></Add>
          </button>
        </div>
      )}

      {data && data[index] && (
        <>
          <div className={style.listContent}>
            <div className={style.totalSection}>
              <p className={style.totaltext}>Total Value</p>
              <p className={style.total}>{format(total)}</p>
            </div>
          </div>
          {Object.entries(data[index].holdings).map(([symbol, holding]) => {
            return (
              <div key={symbol} className={style.grid}>
                <Row stocks={stocksData ? stocksData[symbol] : ({} as any)}>{holding}</Row>
              </div>
            );
          })}
          <button className={style.edit}>Edit list</button>
        </>
      )}

      {data && stocksData && !data[0] && (
        <>
          <div className={style.noLists}>
            <div>
              <p>You don't have any lists</p>
              <button className={style.noListAdd}>Create a list</button>
            </div>
          </div>
        </>
      )}

      {!data || (!stocksData && <>Loading</>)}
    </Container>
  );
}

function Row({ children, stocks }: { children: User['lists'][number]['holdings'][number]; stocks: StockData }) {
  const volumesArr: {
    id: string;
    boughtAt: Date;
    initialPrice: number;
  }[][] = [];
  const holding = children;

  holding.volumes.forEach((vol) => {
    const time = new Date(vol.boughtAt).getTime();

    let matched = false;

    volumesArr.forEach((volume) => {
      volume.forEach((v) => {
        const t2 = new Date(v.boughtAt).getTime();
        if (Math.abs(time - t2) < 1000 * 60 * 60 * 24) {
          matched = true;
          volume.push(v);
        } else matched = false;
      });
    });

    if (!matched) volumesArr.push([vol]);
  });

  return (
    <>
      {volumesArr.map((volumes) => {
        const investment = (() => {
          let t = 0;
          volumes.forEach((volume) => {
            t += volume.initialPrice;
          });
          return t;
        })();

        const currentPrice = stocks.bid;

        return (
          <ul className={style.row} key={holding.symbol}>
            <li>
              <p>
                <span className={style.bold}>{holding.symbol}</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{volumes.length}</span> <span className={style.text}>Shares</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(volumes[0].initialPrice)}</span> <span className={style.text}>Start</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(currentPrice)}</span> <span className={style.text}>Now</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(currentPrice - volumes[0].initialPrice)}</span> <span className={style.text}>Profit per share</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(investment)}</span> <span className={style.text}>Investment</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(0 - investment)}</span> <span className={style.text}>Profit</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(investment - volumes.length * currentPrice)}</span> <span className={style.text}>Total</span>
              </p>
            </li>
            <li className={style.last}>
              <p>
                <span className={style.bold}>{new Intl.DateTimeFormat('en-US', {}).format(new Date(volumes[0].boughtAt))}</span>
                <span className={style.text}>Bought at</span>
              </p>
            </li>
          </ul>
        );
      })}
    </>
  );
}

function format(number: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
}

function formatDate(d: Date) {
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
