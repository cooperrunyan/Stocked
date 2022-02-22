import { oak } from '../../deps.ts';
import { jwt } from '../encryption/index.ts';

export async function logger(ctx: oak.Context, next: () => Promise<unknown>) {
  const startTime = Date.now();
  await next();

  console.log(
    `${ctx.request.method} ${ctx.response.status} ${Date.now() - startTime}ms ${
      ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss || ctx.response.headers.get('username') || 'NOT_LOGGED_IN'
    } ${ctx.request.url.pathname} ${new Date()}`,
  );
}
