import { useRouter } from 'next/router';
import { ReactChild, useEffect, useState } from 'react';
import { animation } from 'src/config';
import useTheme from 'src/hooks/useTheme';

import style from 'style/components/App.module.scss';
import { Menu, Navigation } from '..';

export function App({ children }: { children?: ReactChild | ReactChild[] }) {
  let login = false;

  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [canRender, setCanRender] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (localStorage) {
      const clr = JSON.parse(localStorage.getItem('color') || '{}');

      if (clr.dark) setTheme('dark');
      else {
        setTheme('light');
        setDuration(animation.duration);
      }
      setCanRender(true);

      setTimeout(() => {
        setDuration(animation.duration);
      }, 200);
    }
  }, []);

  [/login/gi, /signup/gi].forEach((regex) => {
    if (regex.test(router.route)) login = true;
  });

  return (
    <>
      <style global jsx>
        {`
          // prettier-ignore
          * {
            transition:
              color ${duration}s ease-in-out,
              background ${duration}s ease-in-out,
              background-color ${duration}s ease-in-out,
              border ${duration}s ease-in-out;
          }
        `}
      </style>

      {canRender && (
        <div className={style.App + ' App'}>
          <Menu className={style.menu} login={!!login} />
          <div className={style.lower}>
            <Navigation className={style.nav} />
            <div className={style.content}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
