import { Container, Toggle } from 'src/components';
import router from 'next/router';

import style from 'style/components/Settings.module.scss';
import { useEffect, useRef, useState } from 'react';

import useTheme from 'src/hooks/useTheme';

export function Settings() {
  const dark = useRef<HTMLLabelElement>(null)!;
  const [lastClick, setLastClick] = useState(0);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const color = JSON.parse(localStorage.getItem('color') || '{}');
    if (color.dark) (dark.current!.children[1] as HTMLInputElement).checked = true;
  }, []);

  return (
    <Container>
      <div className={style.content}>
        <label
          className={style.card}
          ref={dark}
          onClick={() => {
            if (Date.now() - lastClick < 10) return;
            // read localStorage
            const color = JSON.parse(localStorage.getItem('color') || '{}');

            if (color.dark) {
              localStorage.setItem('color', JSON.stringify({ dark: false }));
              setTheme('light');
            } else {
              localStorage.setItem('color', JSON.stringify({ dark: true }));
              setTheme('dark');
            }
            setLastClick(Date.now());
          }}>
          <p className={style.p}>Dark mode</p>
          <Toggle></Toggle>
        </label>
        <button
          className={style.card}
          onClick={(e) => {
            document.cookie = 'jwt=undefined';
            router.push('/');
          }}>
          <p className={style.p}>Logout</p>
        </button>
      </div>
    </Container>
  );
}
