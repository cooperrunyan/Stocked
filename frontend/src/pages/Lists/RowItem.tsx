import { useEffect, useRef } from 'react';
import style from 'style/out/components/Lists.module.css';

export function RowItem({ children: { bold, small }, edit }: { children: { bold: string | number; small: string }; edit?: boolean }) {
  const boldRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (boldRef?.current) boldRef.current.textContent = bold + '';
  }, []);
  return (
    <li>
      <p>
        <span className={style.bold} ref={boldRef} contentEditable={!!edit}></span> {small}
      </p>
    </li>
  );
}
