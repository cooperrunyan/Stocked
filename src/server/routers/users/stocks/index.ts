import { oak } from '../../../../deps.ts';
import { add } from './add.ts';

export const stocks = new oak.Router({ prefix: '/stocks' });

stocks.use(add.routes());
stocks.use(add.allowedMethods());
