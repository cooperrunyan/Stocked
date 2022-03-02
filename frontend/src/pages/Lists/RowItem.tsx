import style from 'style/out/components/Lists.module.css';

export function RowItem({ children: { bold, small }, edit }: { children: { bold: string | number; small: string }; edit?: boolean }) {
  return (
    <li>
      <p>
        <span className={style.bold} contentEditable={!!edit}>
          {bold}
        </span>{' '}
        {small}
      </p>
    </li>
  );
}
