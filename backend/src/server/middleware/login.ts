import { oak } from '../../deps.ts';
import { jwt } from '../encryption/index.ts';

export async function login(ctx: oak.Context, next: () => Promise<unknown>) {
  const body = await ctx.request.body().value;
  const username = body?.username || body?.email;
  if (
    (await ctx.cookies.get('jwt')) &&
    (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
    ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
  )
    return await next();

  ctx.response.status = 401;
  ctx.response.body = {
    message: 'Invalid credentials',
  };
}
