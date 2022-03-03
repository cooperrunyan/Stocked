import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const remove = new oak.Router({ prefix: '/remove' });

remove.use(middleware.noEmptyBody);
remove.use(middleware.login);
remove.delete('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (body.list == null) {
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

  if (list == null) {
    ctx.response.status = 304;
    return;
  }

  user.lists.splice(list, 1);

  controller.set({ username: user.username }, { ...user });

  ctx.response.status = 201;
  ctx.response.body = {
    message: 'Removed List',
  };

  return;
});
