import { useRouter } from 'next/router';
import { HTMLAttributes } from 'react';
import style from 'style/src//components/Menu.module.scss';

import { Link } from '..';

import * as icons from './svg';

export function Menu({
  className,
  login,
}: HTMLAttributes<HTMLDivElement> & {
  login?: boolean;
}) {
  const router = useRouter();

  return (
    <div className={style.menu + ' ' + className}>
      <div className={style.login}>
        {login && (
          <>
            <Link href="/login" className={style.login}>
              Login
            </Link>
            <Link href="/signup" className={style.login + ' ' + style.signup}>
              Sign up
            </Link>
          </>
        )}
        {!login && (
          <div onClick={router.back} className={style.back}>
            <icons.Chevron></icons.Chevron>
          </div>
        )}
      </div>
      <div className={style.right}>
        {!login && (
          <>
            <div className={style.control}>
              <label htmlFor="clicker" className={style.label}>
                <icons.Menu className={style.svg} />
              </label>
              <Link href="/settings">
                <icons.Settings className={style.svg} />
              </Link>
            </div>
            <div className={style.nameHolder}>
              <p className={style.name}>Cooper R.</p>
            </div>
          </>
        )}
        {login && <p className={style.name}>You don't seem to be logged in</p>}
      </div>
    </div>
  );
}
