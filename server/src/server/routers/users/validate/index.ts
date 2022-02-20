import { Controller } from '../../../mongo/Controller.ts';
import { oak } from '../../../../deps.ts';
import { jwt } from '../../../encryption/index.ts';

export const validate = new oak.Router({ prefix: '/validate' });
const controller = new Controller();

validate.get('/', async (ctx) => {
  const params: { [key: string]: string } = {};
  const searchParams = [...ctx.request.url.searchParams];

  searchParams.forEach(([key, value]) => {
    params[key] = value;
  });

  const { token } = params;

  const tkn = token || ((await ctx.cookies.get('jwt')) as string);

  // If the token was signed and the user exists in the database
  let valid =
    (await jwt.validate(tkn)).isValid &&
    !!(await controller.get({ username: ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss }));

  ctx.response.status = 200;
  ctx.response.body = {
    valid,
  };
});
