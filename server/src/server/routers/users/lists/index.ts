import { oak } from '../../../../deps.ts';

import { add } from './add.ts';
import { remove } from './remove.ts';

export const lists = new oak.Router({ prefix: '/lists' });

lists.use(add.routes());
lists.use(add.allowedMethods());

lists.use(remove.routes());
lists.use(remove.allowedMethods());
