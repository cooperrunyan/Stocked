import { ReactChild } from 'react';

import style from 'style/components/App.module.scss';
import { Menu, Navigation } from '..';

export function App({ children, login }: { children?: ReactChild; login?: boolean }) {
  return (
    <div className={style.App}>
      <Menu className={style.menu} login={!!login} />
      <div className={style.lower}>
        <Navigation className={style.nav} />
        <div className={style.content}>{children}</div>
      </div>
    </div>
  );
}
