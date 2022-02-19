import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as encryption from '../../../encryption/index.ts';
import * as middleware from '../../../middleware/index.ts';

export const login = new oak.Router({ prefix: '/login' });

const controller = new Controller();

login.use(middleware.login({ strict: false }));
login.post('/', async (ctx) => {
  const body = await ctx.request.body().value!;
  const user = (await controller.get(body.email ? { email: body.email } : { username: body.username }))!;

  ctx.response.status = 200;
  ctx.response.body = {
    message: 'Login success',
    account: {
      email: user.email,
      username: user.username,
    },
  };
});
