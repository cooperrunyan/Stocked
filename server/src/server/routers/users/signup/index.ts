import { Controller } from './../../../mongo/index.ts';
import { oak, env } from '../../../../deps.ts';
import * as middlewares from '../../../middleware/index.ts';
import * as encryption from '../../../encryption/index.ts';
import * as validators from '../../../validators/index.ts';
import { User } from '../../../models/index.ts';

env();

export const signup = new oak.Router({ prefix: '/signup' });
const controller = new Controller();

signup.use(middlewares.noEmptyBody);
signup.post('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (!body.password || !body.username || !body.email) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'A username, password, and email are all required',
    };

    return;
  }

  if (await controller.exists({ username: body.username })) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'That username has already been taken',
    };

    return;
  }

  if (!validators.email(body.email)) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: "That doesn't seem to be a valid email",
    };

    return;
  }

  if (!validators.password(body.password)) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'Passwords require a minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
    };

    return;
  }

  if (await controller.exists({ email: body.email })) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'That email is already in use',
    };

    return;
  }

  await controller.create(
    new User({
      email: body.email,
      username: body.username,
      password: await encryption.hash(body.password),
    }),
  );
  const token = await encryption.jwt.create(body.username);
  ctx.cookies.set('jwt', token);

  ctx.response.status = 201;
  ctx.response.body = {
    message: 'Account created',
    token,
    account: {
      email: body.email,
      username: body.username,
    },
  };
});
