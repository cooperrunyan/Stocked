import { oak } from '../../../deps.ts';

import { login } from './login/index.ts';
import { signup } from './signup/index.ts';
import { remove } from './remove/index.ts';
import { update } from './update/index.ts';
import { stocks } from './stocks/index.ts';
import { validate } from './validate/index.ts';
import { lists } from './lists/index.ts';
import { Controller } from '../../mongo/index.ts';

import { jwt } from '../../encryption/index.ts';
import { User } from '../../models/index.ts';

export const users = new oak.Router({ prefix: '/users' });
const controller = new Controller();

users.get('/', async (ctx) => {
  const params: { [key: string]: string } = {};
  Array.from(ctx.request.url.searchParams).forEach(([key, value]) => {
    params[key] = value;
  });

  const tkn = params.token || ((await ctx.cookies.get('jwt')) as string);

  const val = (await jwt.validate(tkn)) as any;
  const username = val?.payload?.iss;
  let valid = (await val.isValid) && !!(await controller.get({ username }));

  if (!username) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'No username',
    };
    return;
  }

  const user = await controller.get({ username: ctx.params.username });
  // Check validated, return user lists

  if (!valid) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'INvalid credentials',
    };
    return;
  }

  if (!user) {
    ctx.response.status = 401;
    ctx.response.body = {
      message: 'That user does not exist',
    };
    return;
  }

  const u: Partial<User> = { ...user };

  delete u._id;
  delete u.password;
  delete u.email;

  ctx.response.status = 200;
  ctx.response.body = {
    user: u,
  };
});

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
