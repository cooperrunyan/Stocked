import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as encryption from '../../../encryption/index.ts';
import * as middleware from '../../../middleware/index.ts';
import { jwt } from '../../../encryption/index.ts';

export const login = new oak.Router({ prefix: '/login' });

const controller = new Controller();

login.post('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (!body.password || (!body.username && !body.email)) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'A password, and (email or username) are required',
    };

    return;
  }

  const user = await controller.get(body.email ? { email: body.email } : { username: body.username });

  if (!user) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'That email/username (or combination of the two) does not exist',
    };

    return;
  }

  if (!(await encryption.evaluate(body.password, user.password))) {
    ctx.response.status = 401;
    ctx.response.body = {
      message: 'Invalid credentials',
    };

    return;
  }

  const token = await jwt.create(body.username);

  await ctx.cookies.set('jwt', token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
  });

  ctx.response.headers.set('username', body.username);
  ctx.response.status = 200;
  ctx.response.body = {
    message: 'Login success',
    token,
    account: {
      email: user.email,
      username: user.username,
    },
  };
});
