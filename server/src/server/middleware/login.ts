import { validate } from './../routers/users/validate/index.ts';
import { oak } from '../../deps.ts';
import { jwt } from '../encryption/index.ts';

export async function login(ctx: oak.Context, next: () => Promise<unknown>) {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;
  const username = body?.username || body?.email;

  const token = body.token || (await ctx.cookies.get('jwt'));

  const evaluation = await jwt.validate(token);
  if (token && evaluation.isValid && (evaluation as any)?.payload?.iss === username) return await next();

  ctx.response.status = 401;
  ctx.response.body = {
    message: 'Invalid credentials',
  };
}
