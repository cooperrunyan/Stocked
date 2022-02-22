import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const remove = new oak.Router({ prefix: '/remove' });

const controller = new Controller();

remove.use(middleware.login);
remove.delete('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;
  const user = await controller.get(body.email ? { email: body.email } : { username: body.username })!;

  await controller.remove(body.email ? { email: body.email } : { username: body.username });

  ctx.response.status = 200;
  ctx.response.body = {
    message: 'Account removed',
    account: {
      email: user?.email,
      username: user?.username,
    },
  };
  ctx.cookies.delete('jwt');
});
