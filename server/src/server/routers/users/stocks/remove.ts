import { Volume, Holding } from '../../../models/index.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const remove = new oak.Router({ prefix: '/remove' });

remove.use(middleware.noEmptyBody);
remove.use(middleware.login);
remove.delete('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (!body.stocks) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'No stocks entry was provided',
    };

    return;
  }

  if (!Array.isArray(body.stocks)) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'The "stocks" property must be an array of objects',
    };
    return;
  }

  const controller = new Controller();
  const user = await controller.get(body.email ? { email: body.email } : { username: body.username });

  if (!user) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'User not found',
    };

    return;
  }

  let extVolumes = [];

  for (const stock of body.stocks) {
    for (const volume of stock.volumes) {
      const { id } = volume;
      for (const volume of user.holdings[stock.symbol].volumes) {
        if (volume.id === id) {
          user.holdings[stock.symbol].volumes.splice(user.holdings[stock.symbol].volumes.indexOf(volume));
          extVolumes.push(volume);
        }
      }
    }
  }

  controller.set({ username: user?.username }, { ...user });

  ctx.response.status = 201;
  ctx.response.body = {
    message: 'Removed volumes',
    volumes: extVolumes,
  };

  return;
});
