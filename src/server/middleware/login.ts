import { oak } from '../../deps.ts';
import { jwt } from '../encryption/index.ts';
import { Controller } from '../mongo/index.ts';
import * as encryption from '../encryption/index.ts';

const controller = new Controller();
export function login({ strict }: { strict: boolean }) {
  return async function loginMW(ctx: oak.Context, next: () => Promise<unknown>) {
    const body = await ctx.request.body().value!;

    // If the route is not strict (param) and there is a valid jwt, skip login process
    if (!strict && (await ctx.cookies.get('jwt')) && (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid) return await next();

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

    await ctx.cookies.set('jwt', await jwt.create(body.username));

    await next();
  };
}
