import { oak } from '../../deps.ts';

export async function protectServer(ctx: oak.Context, next: () => Promise<unknown>) {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = {
      error: 'ERROR: ' + err.message,
      message: 'This is may be a user error, check the documentation to make sure your request is formatted correctly',
    };
  }
}
