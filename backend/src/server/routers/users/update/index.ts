import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';
import * as encryption from '../../../encryption/index.ts';
import * as validators from '../../../validators/index.ts';

export const update = new oak.Router({ prefix: '/update' });

const controller = new Controller();

update.use(middleware.login);
update.put('/', async (ctx) => {
  const body = await ctx.request.body().value!;

  if (body.new.email && !validators.email(body.new.email)) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: "That doesn't seem to be a valid email",
    };

    return;
  }

  if (body.new.password && !validators.password(body.new.password)) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'Passwords require a minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
    };

    return;
  }

  await controller.set(body.email ? { email: body.email } : { username: body.username }, {
    ...body.new,
    password: body.new.password ? await encryption.hash(body.new.password) : undefined,
  });

  const user = await controller.get(
    body.new.email
      ? { email: body.new.email }
      : body.new.username
      ? { username: body.new.username }
      : body.email
      ? { email: body.email }
      : body.username
      ? { username: body.username }
      : { ...body.new },
  );

  ctx.response.status = 200;
  ctx.response.body = {
    message: 'Data changed',
    account: {
      email: user?.email,
      username: user?.username,
    },
  };
});
