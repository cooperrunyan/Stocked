import { oak } from '../../../deps.ts';

import { login } from './login/index.ts';
import { signup } from './signup/index.ts';
import { remove } from './remove/index.ts';
import { update } from './update/index.ts';
import { stocks } from './stocks/index.ts';
import { validate } from './validate/index.ts';
import { lists } from './lists/index.ts';

export const users = new oak.Router({ prefix: '/users' });

users.use(login.routes());
users.use(login.allowedMethods());

users.use(signup.routes());
users.use(signup.allowedMethods());

users.use(remove.routes());
users.use(remove.allowedMethods());

users.use(update.routes());
users.use(update.allowedMethods());

users.use(stocks.routes());
users.use(stocks.allowedMethods());

users.use(validate.routes());
users.use(validate.allowedMethods());

users.use(lists.routes());
users.use(lists.allowedMethods());
