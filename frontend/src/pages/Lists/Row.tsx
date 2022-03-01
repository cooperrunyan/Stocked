import { RowItem } from './RowItem';
import style from 'style/out/components/Lists.module.css';
import { StockData, User } from 'src/models';
import { format } from './utils';


export function Row({
  children: { symbol, data },
  stocksData,
}: {
  stocksData: { [key: string]: StockData };
  children: { symbol: string; data: User['lists'][number]['holdings'][number] };
}) {
  const value = stocksData[symbol]?.bid || 0;

  return (
    <div>
      <ul className={style.row} key={symbol}>
        <RowItem>{{ bold: symbol, small: '' }}</RowItem>
        <RowItem>{{ bold: data.volumes.length, small: 'Shares' }}</RowItem>
        <RowItem>{{ bold: format(data.volumes[0].initialPrice), small: 'Start' }}</RowItem>
        <RowItem>{{ bold: format(value), small: 'Now' }}</RowItem>
        <RowItem>{{ bold: format(value - data.volumes[0].initialPrice), small: 'Profit Per share' }}</RowItem>
        <RowItem>{{ bold: format(data.volumes[0].initialPrice * data.volumes.length), small: 'Initial Investment' }}</RowItem>
        <RowItem>
          {{
            bold: format(value * data.volumes.length - data.volumes[0].initialPrice * data.volumes.length),
            small: 'Profit',
          }}
        </RowItem>
        <RowItem>{{ bold: format(value * data.volumes.length), small: 'Total' }}</RowItem>
        <RowItem>{{ bold: new Intl.DateTimeFormat('en-US', {}).format(new Date(data.volumes[0].boughtAt)), small: 'Bought At' }}</RowItem>
      </ul>
    </div>
  );
}
