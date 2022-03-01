import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { User } from 'src/models';
import style from 'style/out/components/Lists.module.css';

import Add from './Add.svg';

export function Header({ children: { user, index, setIndex } }: { children: { user: User; index?: number; setIndex?: Function } }) {
  const router = useRouter();

  return (
    <div className={style.lists} id="header">
      <div className={style.listContainer}>
        <ul>
          {user.lists.map((list, i) => (
            <li key={list.name}>
              <button
                className={i === index ? style.active : ''}
                onClick={() => {
                  if (setIndex) setIndex(i);
                  else
                    router.push({
                      pathname: '/lists',
                      query: { index: i },
                    });
                }}>
                {list.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {!Number.isNaN(index) && (
        <Add
          className={style.add}
          onClick={() => {
            router.push('/lists/new');
          }}></Add>
      )}
    </div>
  );
}
