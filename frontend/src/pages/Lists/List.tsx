import { useRouter } from 'next/router';
import { Container, Link } from 'src/components';
import style from 'style/src//components/Lists.module.scss';

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

type Lists = List[];

export function List({ data }: { data: Lists }) {
  const router = useRouter();

  const index = +(router.query.id || 0);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
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

      {data[index] && (
        <>
          <div className={style.listContent}>
            <div className={style.totalSection}>
              <p className={style.totaltext}>Total Value</p>
              <p className={style.total}>{formatter.format(6206.4)}</p>
            </div>
          </div>
          <div className={style.grid}>
            <ul className={style.row}>
              <li>
                <p>
                  <span className={style.bold}>V</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>14</span> <span className={style.text}>Shares</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(102)}</span> <span className={style.text}>Start</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(131)}</span> <span className={style.text}>Now</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(29)}</span> <span className={style.text}>Profit per share</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(1428)}</span> <span className={style.text}>Investment</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(406)}</span> <span className={style.text}>Profit</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{formatter.format(1834)}</span> <span className={style.text}>Total</span>
                </p>
              </li>
              <li>
                <p>
                  <span className={style.bold}>{new Intl.DateTimeFormat('en-US', {}).format(new Date())}</span> <span className={style.text}>Bought at</span>
                </p>
              </li>
            </ul>
          </div>
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
    </Container>
  );
}

export async function getStaticProps() {
  await new Promise((resolve) => setTimeout(resolve, 25));

  return {
    props: { data },
    revalidate: 100, // In seconds
  };
}

const data = [
  {
    name: 'My First List',
    holdings: [
      {
        symbol: 'V',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
      {
        symbol: 'CRM',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
      {
        symbol: 'COST',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
    ],
  },
  {
    name: 'My Second List',
    holdings: [
      {
        symbol: 'CRM',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
      {
        symbol: 'V',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
      {
        symbol: 'COST',
        buyDate: 'Mon Feb 21 2022 17:10:37 GMT-0700 (Mountain Standard Time)',
        currentPrice: 131,
        initialPrice: 102,
        shares: 14,
      },
    ],
  },
];

export async function getStaticPaths() {
  // await new Promise((resolve) => setTimeout(resolve, 25));

  const paths = data.map((list, index) => ({
    params: { id: index + '' },
  }));

  return { paths, fallback: false };
}
