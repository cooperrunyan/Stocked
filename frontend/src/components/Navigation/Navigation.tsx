import { HTMLAttributes } from 'react';
import { Link } from '..';
import style from 'style/components/Navigation.module.scss';

import * as icons from './svg';

import { useRouter } from 'next/router';

export function Navigation({ className }: HTMLAttributes<HTMLDivElement>) {
  const route = useRouter().route.replace('/', '');
  return (
    <>
      <input type="checkbox" name="clicker" id="clicker" className={style.clicker} />
      <div className={style.nav + ' ' + className}>
        <ul className={style.ul}>
          <li className={style.li + ' ' + (route === 'dashboard' ? style.active : null)}>
            <Link className={style.link} href="/dashboard">
              Dashboard <icons.Dashboard />
            </Link>
          </li>
          <li className={style.li + ' ' + (route === 'lists' ? style.active : null)}>
            <Link className={style.link} href="/lists">
              Lists <icons.Lists />
            </Link>
          </li>
          <li className={style.li + ' ' + (route === 'search' ? style.active : null)}>
            <Link className={style.link} href="/search">
              Search <icons.Search />
            </Link>
          </li>
          <li className={style.li + ' ' + (route === 'settings' ? style.active : null)}>
            <Link className={style.link} href="/settings">
              Settings <icons.Settings />
            </Link>
          </li>
        </ul>
        <icons.Stocked />
      </div>
    </>
  );
}
