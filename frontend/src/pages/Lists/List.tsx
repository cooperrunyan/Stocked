import { useEffect, useState } from 'react';
import { Container } from 'src/components';
import { StockData, User } from 'src/models';
import style from 'style/out/components/Lists.module.css';

import { getUser } from './get/getUser';
import { getStockData } from './get/getStockData';
import { Row } from './Row';
import { Header } from './Header';
import { TotalCard } from './TotalCard';
import { useRouter } from 'next/router';

export function List() {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [stockData, setStockData] = useState<{ [key: string]: StockData } | null>(null);
  const [index, indexSetter] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  function setIndex(index: number) {
    router.push(
      {
        pathname: '/lists',
        query: { index },
      },
      undefined,
      { shallow: true },
    );
    indexSetter(index);
  }

  useEffect(() => {
    setIndex(Number(router.query.index as string | undefined) || 0);
  }, []);

  useEffect(() => {
    (async () => {
      const user = await getUser();
      setUser(user);
      setStockData(await getStockData(user, index));
    })();
  }, [index]);

  useEffect(() => {
    if (!user) return;

    if (JSON.stringify(user.lists[index].holdings) === '{}') {
      setTotal(0);
      return;
    }

    const t = Object.values(user.lists[index].holdings)
      .map((holding) => holding.volumes.map((vol) => vol.initialPrice).reduce((a, b) => a + b))
      .reduce((a, b) => a + b);

    setTotal(t);
  }, [index, user]);

  return (
    <Container>
      {user && stockData && (
        <>
          <Header>{{ user, index, setIndex }}</Header>
          <TotalCard>{{ total }}</TotalCard>

          {Object.entries(user.lists[index].holdings).map(([symbol, data]) => (
            <div className={style.grid} key={symbol}>
              <Row stocksData={stockData}>{{ symbol, data }}</Row>
            </div>
          ))}

          <button className={style.edit}>Edit list</button>
        </>
      )}
    </Container>
  );
}
