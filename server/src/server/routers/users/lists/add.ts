import { Volume, Holding } from '../../../models/index.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const add = new oak.Router({ prefix: '/add' });

add.use(middleware.noEmptyBody);
add.use(middleware.login);
add.put('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (!body.list) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'No list was provided',
    };

    return;
  }

  const controller = new Controller();
  const user = await controller.get(body.email ? { email: body.email } : { username: body.username });

  if (!user) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'User not found',
    };

    return;
  }

  const list = (() => {
    if (!Number.isNaN(+body.list)) return +body.list;

    for (const list of user.lists) {
      if (list.name === body.list) return user.lists.indexOf(list);
    }
  })();

  if (list != null) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'That list already exists',
    };

    return;
  }

  for (const list of user.lists) {
    if (list.name === body.list.name) {
      ctx.response.status = 400;
      ctx.response.body = {
        message: 'That list already exists',
      };

      return;
    }
  }

  user.lists.push({
    name: body.list.name,
    holdings: body.list.holdings,
  });

  controller.set({ username: user.username }, { ...user });

  ctx.response.status = 201;
  ctx.response.body = {
    message: 'Added List',
  };

  return;
});
