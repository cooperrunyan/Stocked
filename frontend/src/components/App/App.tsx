import { useRouter } from 'next/router';
import { ReactChild, useEffect } from 'react';
import useTheme from 'src/hooks/useTheme';

import style from 'style/components/App.module.scss';
import { Menu, Navigation } from '..';

export function App({ children }: { children?: ReactChild | ReactChild[] }) {
  let login = false;

  const router = useRouter();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (localStorage) {
      const clr = JSON.parse(localStorage.getItem('color') || '{}');

      if (clr.dark) setTheme('dark');
      else setTheme('light');
    }
  }, []);

  [/login/gi, /signup/gi].forEach((regex) => {
    if (regex.test(router.route)) login = true;
  });

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
