import { Holdings } from './../../../models/Holdings.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import { jwt } from '../../../encryption/index.ts';
import { Holding } from '../../../models/index.ts';

export const get = new oak.Router({ prefix: '/:username/get' });

const controller = new Controller();

get.get('/:id', async (ctx) => {
  const user = ctx.params.username;
  const id = ctx.params.id;
  const username = user;
  if (
    (await ctx.cookies.get('jwt')) &&
    (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
    ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
  ) {
    const volumes: any[] = [];

    Object.entries((await controller.get({ username: user }))?.holdings as Holdings).forEach(([symbol, holding]) => {
      for (const volume of holding.volumes) {
        if (volume.id === id) volumes.push(volume);
      }
    });

    ctx.response.status = 200;
    ctx.response.body = {
      username: user,
      volume: volumes[0],
    };

    return;
  } else {
    ctx.response.status = 401;
    ctx.response.body = {
      message: 'Invalid credentials',
    };

    return;
  }
});

get.get('/', async (ctx) => {
  const user = ctx.params.username;
  const username = user;
  if (
    (await ctx.cookies.get('jwt')) &&
    (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
    ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
  ) {
    ctx.response.status = 200;
    ctx.response.body = {
      username: user,
      holdings: (await controller.get({ username: user }))?.holdings,
    };

    return;
  } else {
    ctx.response.status = 401;
    ctx.response.body = {
      message: 'Invalid credentials',
    };

    return;
  }
});
