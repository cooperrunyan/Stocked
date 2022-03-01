import { format } from './utils';
import style from 'style/out/components/Lists.module.css';

export function TotalCard({ children: { total } }: { children: { total: number } }) {
  return (
    <div className={style.listContent}>
      <div className={style.totalSection}>
        <p className={style.totaltext}>Total Value</p>
        <p className={style.total}>{format(total)}</p>
      </div>
    </div>
  );
}
