import { useRouter } from 'next/router';
import { FormEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Container } from 'src/components';
import { User, StockData } from 'src/models';
import style from 'style/out/components/Lists.module.css';
import { getStockData } from './get/getStockData';
import { getUser } from './get/getUser';
import { Header } from './Header';

export function New() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const name = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const user = await getUser();

      if (alive) setUser(user);
    })();

    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    (document.querySelector('#header') as HTMLInputElement)?.focus();
  }, []);

  return (
    <Container>
      {user && (
        <>
          <Header>{{ user }}</Header>
          <input className={style.card} defaultValue="List Name" ref={name} />
          <button
            className={style.edit}
            onClick={async (e) => {
              e.preventDefault();
              console.log(name.current?.value);

              const username = (await getUser()).username;
              const token = /jwt=.+\n/
                .exec((document.cookie + ';').split(';').join('\n'))
                ?.at(0)
                ?.replaceAll('jwt=', '')
                .replace(';', '');

              const res = await fetch(`http://localhost:8000/api/users/lists/add`, {
                method: 'PUT',
                body: JSON.stringify({
                  username,
                  token,
                  list: {
                    name: name.current!.value,
                    holdings: {},
                  },
                }),
              });

              const response = await res.json();

              if (res.status === 201) {
                router.push({
                  pathname: '/lists',
                  query: { index: response.index },
                });
              }

              if (response.message === 'That list already exists') {
                alert(response.message);
              }
            }}>
            Confirm
          </button>
          <button className={style.cancel} onClick={router.back}>
            Cancel
          </button>
        </>
      )}
    </Container>
  );
}
