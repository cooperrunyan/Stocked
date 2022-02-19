import { Volume, Holding } from '../../../models/index.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const add = new oak.Router({ prefix: '/add' });

add.use(middleware.noEmptyBody);
add.use(middleware.login({ strict: false }));
add.put('/', async (ctx) => {
  const body = await ctx.request.body().value;
  const controller = new Controller();
  const user = await controller.get(body.email ? { email: body.email } : { username: body.username });

  if (!user) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'User not found',
    };
    return;
  }

  const volumes = Array.isArray(body.stock.price)
    ? body.stock.price.map((price: number) => new Volume(price, body.stock.boughtAt || new Date()))
    : [new Volume(body.stock.price!, body.stock.boughtAt || new Date())];

  if (user.holdings[body.stock.symbol]) user.holdings[body.stock.symbol]?.volumes.push(...volumes);
  else user.holdings[body.stock.symbol] = new Holding(body.stock.symbol, volumes);
  controller.set({ username: user?.username }, { ...user });

  ctx.response.status = 201;
  ctx.response.body = {
    message: `Added volume${Array.isArray(body.stock.price) ? 's' : ''}`,
  };

  return;
});
