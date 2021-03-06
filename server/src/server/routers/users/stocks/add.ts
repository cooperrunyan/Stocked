import { Volume, Holding } from '../../../models/index.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import * as middleware from '../../../middleware/index.ts';

export const add = new oak.Router({ prefix: '/add' });

add.use(middleware.noEmptyBody);
add.use(middleware.login);
add.put('/', async (ctx) => {
  const body = typeof (await ctx.request.body().value) === 'string' ? JSON.parse(await ctx.request.body().value) : await ctx.request.body().value;

  if (body.list == null) {
    ctx.response.status = 406;
    ctx.response.body = {
      message: 'No list was provided',
    };

    return;
  }

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

  const list = (() => {
    if (!Number.isNaN(+body.list)) return +body.list;

    for (const list of user.lists) {
      if (list.name === body.list) return user.lists.indexOf(list);
    }
  })();

  if (list == null) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'That list does not exist',
    };

    return;
  }

  if (user.lists[list] == null) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'That list does not exist',
    };

    return;
  }

  let extVolumes = [];

  for (const stock of body.stocks) {
    const volumes = stock?.volumes?.map((volume: { price: number; date?: Date }) => new Volume(volume.price, volume.date ? new Date(volume.date) : new Date()));

    if (user.lists[list].holdings[stock.symbol]) user.lists[list].holdings[stock.symbol]?.volumes.push(...volumes);
    else user.lists[list].holdings[stock.symbol] = new Holding(stock.symbol, volumes);

    extVolumes.push(
      ...volumes.map((volume: Volume) => {
        return { symbol: stock.symbol, ...volume };
      }),
    );
  }

  controller.set({ username: user?.username }, { ...user });

  ctx.response.status = 201;
  ctx.response.body = {
    message: 'Added volumes',
    volumes: extVolumes,
  };

  return;
});
