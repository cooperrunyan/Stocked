import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'src/components';

import style from 'style/out/components/Stock.module.css';

import PlaceHolderSVG from './PlaceHolder.svg';

interface Data {
  open: number;
  close: number;
  dayReturn: number;
  ytdReturn: number;
  low: number;
  high: number;
  name: string;
  symbol: string;
  price: number;
}

export function Stock() {
  const router = useRouter();

  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const symbol = router.query.id;
    if (!symbol) return;

    setTimeout(() => {
      setData({
        open: 104.43,
        close: 104.29,
        dayReturn: 49.23,
        ytdReturn: 125.62,
        low: 102.75,
        high: 155.62,
        price: 153.24,
        name: 'Visa Inc.',
        symbol: 'V',
      });
    }, 75);
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Container>
      {data && (
        <>
          <div>
            <p className={style.name}>{data.name}</p>
            <p className={style.symbol}>{data.symbol}</p>
            <p className={style.price}>{formatter.format(data.price)}</p>
          </div>
          <div className={style.content}>
            <ul className={style.info}>
              <li className={style.infoRow}>
                <span>Open</span>
                <span>{formatter.format(data.open)}</span>
              </li>
              <li className={style.infoRow}>
                <span>Previous close</span>
                <span>{formatter.format(data.close)}</span>
              </li>
              <li className={style.infoRow}>
                <span>Day return</span>
                <span>{formatter.format(data.dayReturn)}</span>
              </li>
              <li className={style.infoRow}>
                <span>YTD return</span>
                <span>{formatter.format(data.ytdReturn)}</span>
              </li>
              <li className={style.infoRow}>
                <span>Day low</span>
                <span>{formatter.format(data.low)}</span>
              </li>
              <li className={style.infoRow}>
                <span>Day high</span>
                <span>{formatter.format(data.high)}</span>
              </li>
            </ul>
            <PlaceHolderSVG></PlaceHolderSVG>
          </div>
        </>
      )}
    </Container>
  );
}
