import { oak } from '../../../../deps.ts';

import { add } from './add.ts';
import { remove } from './remove.ts';
import { get } from './get.ts';

export const stocks = new oak.Router({ prefix: '/stocks' });

stocks.use(add.routes());
stocks.use(add.allowedMethods());

stocks.use(remove.routes());
stocks.use(remove.allowedMethods());

stocks.use(get.routes());
stocks.use(get.allowedMethods());
