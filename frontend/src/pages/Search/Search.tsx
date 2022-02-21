import { useEffect, useRef, useState } from 'react';
import { Container, Link } from 'src/components';

import style from 'style/components/Search.module.scss';

interface CardData {
  name: string;
  symbol: string;
  price: number;
}

export function Search() {
  const searchBar = useRef<HTMLInputElement>(null);

  const [results, setResults] = useState<CardData[]>([]);

  useEffect(() => {
    setResults([
      { name: 'Visa Inc.', symbol: 'V', price: 113.04 }, // The only one that works
      { name: 'ViacomCBS Inc.', symbol: 'VIAC', price: 29.58 },
      { name: 'Virgin Galactic Holdings, Inc.', symbol: 'SPCE', price: 8.4 },
      { name: 'Zoom Video Communications, Inc.', symbol: 'ZM', price: 126.96 },
    ]);
  }, []);

  return (
    <Container>
      <input type="text" ref={searchBar} className={style.searchBar} placeholder="Search" />

      <div className={style.content}>
        {results.map((card) => (
          <Card key={card.symbol}>{card}</Card>
        ))}
      </div>
    </Container>
  );
}

function Card({ children }: { children: CardData }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Link href={`/search/${children.symbol.toLowerCase()}`} className={style.card}>
      <div className={style.text}>
        <p className={style.name}>{children.name}</p>
        <p className={style.symbol}>{children.symbol}</p>
      </div>
      <p className={style.price}>{formatter.format(children.price)}</p>
    </Link>
  );
}
