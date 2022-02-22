import { oak } from '../../deps.ts';

export async function noEmptyBody(ctx: oak.Context, next: () => Promise<unknown>) {
  if (!ctx.request.hasBody || !ctx.request.headers.has('Content-Type')) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'body required',
    };

    return;
  }
  await next();
}
