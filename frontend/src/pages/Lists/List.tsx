import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Link } from 'src/components';
import { User } from 'src/models';
import style from 'style/out/components/Lists.module.css';

import Add from './Add.svg';

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
  const [alive, kill] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;

    if (!data) return setTotal(0);

    Object.entries(data[index]?.holdings || {}).forEach(([symbol, holding]) => {
      holding.volumes.forEach((volume) => {
        total += volume.initialPrice;
      });
    });

    setTotal(total);
  }, [data]);

  useEffect(() => {
    (async () => {
      if (!alive) return;
      const token = /jwt=.+\n/
        .exec((document.cookie + ';').split(';').join('\n'))
        ?.at(0)
        ?.replaceAll('jwt=', '')
        .replace(';', '');

      const res = await fetch(`http://localhost:8000/api/users?token=${token}`, {
        method: 'GET',
      });

      const data = await res.json();

      if (!alive) return;
      if (res.status !== 200) return setData(null);

      setData(data.user.lists);
    })();

    return () => kill(false);
  }, []);

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
          {Object.entries(data[index].holdings).map(([symbol, holding]) => (
            <div key={symbol} className={style.grid}>
              <Row>{holding}</Row>
            </div>
          ))}
        </>
      )}

      {data && !data[0] && (
        <>
          <div className={style.noLists}>
            <div>
              <p>You don't have any lists</p>
              <button className={style.noListAdd}>Create a list</button>
            </div>
          </div>
        </>
      )}

      {!data && <>Loading</>}
    </Container>
  );
}

function Row({ children }: { children: User['lists'][number]['holdings'][number] }) {
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

        const total = (() => {
          let t = 0;
          volumes.forEach((volume) => {
            t += volume.initialPrice + 100;
          });
          return t;
        })();

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
                <span className={style.bold}>{format(volumes[0].initialPrice + 100)}</span> <span className={style.text}>Now</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(volumes[0].initialPrice + 100 - volumes[0].initialPrice)}</span>{' '}
                <span className={style.text}>Profit per share</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(investment)}</span> <span className={style.text}>Investment</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(total - investment)}</span> <span className={style.text}>Profit</span>
              </p>
            </li>
            <li>
              <p>
                <span className={style.bold}>{format(total)}</span> <span className={style.text}>Total</span>
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
