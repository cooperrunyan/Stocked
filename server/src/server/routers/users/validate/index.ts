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

  const { token, username } = params;
  const tkn = token || ((await ctx.cookies.get('jwt')) as string);

  // If the token was signed and the user exists in the database

  const val = (await jwt.validate(tkn)) as any;
  const name = username || val.payload.iss;
  let valid = (await val.isValid) && !!(await controller.get({ username: name }));
  ctx.response.headers.set('username', name);

  ctx.response.status = 200;
  ctx.response.body = {
    valid,
  };
});
