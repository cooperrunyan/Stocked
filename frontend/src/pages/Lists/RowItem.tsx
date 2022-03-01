import style from 'style/out/components/Lists.module.css';

export function RowItem({ children: { bold, small } }: { children: { bold: string | number; small: string } }) {
  return (
    <li>
      <p>
        <span className={style.bold}>{bold}</span> {small}
      </p>
    </li>
  );
}
