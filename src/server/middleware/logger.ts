import { oak } from '../../deps.ts';

export async function logger(ctx: oak.Context, next: () => Promise<unknown>) {
  await next();
  console.log(`${ctx.request.method} ${ctx.request.url.pathname} ${ctx.response.status}`);
}
