import { Holdings } from './../../../models/Holdings.ts';
import { Controller } from '../../../mongo/index.ts';
import { oak } from '../../../../deps.ts';
import { jwt } from '../../../encryption/index.ts';
import { Holding, Volume } from '../../../models/index.ts';

export const get = new oak.Router({ prefix: '/:username/get' });

const controller = new Controller();

get.get('/:list/:id', async (ctx) => {
  const username = ctx.params.username;

  const user = await controller.get({ username });

  if (!user) {
    ctx.response.status = 400;
    ctx.response.body = {
      username,
      message: 'That user does not exist',
    };

    return;
  }

  const id = ctx.params.id;
  const list = (() => {
    if (!Number.isNaN(+ctx.params.list)) return user.lists.at(+ctx.params.list);

    for (const list of user.lists) {
      if (list.name === ctx.params.list) return list;
    }
  })();

  if (!list) {
    ctx.response.status = 400;
    ctx.response.body = {
      message: 'That list does not exist',
    };

    return;
  }

  if (
    (await ctx.cookies.get('jwt')) &&
    (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
    ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
  ) {
    const volumes: Volume[] = [];

    for (const holding of Object.values(list.holdings)) {
      Object.values(holding.volumes || {}).forEach((volume) => {
        if (volume.id === id) volumes.push(volume);
      });
    }

    ctx.response.status = 200;
    ctx.response.body = {
      username: user.username,
      volume: volumes[0] || null,
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

get.get('/:list', async (ctx) => {
  const username = ctx.params.username;

  const user = await controller.get({ username });

  if (!user) {
    ctx.response.status = 400;
    ctx.response.body = {
      username,
      message: 'That user does not exist',
    };

    return;
  }

  const list = (() => {
    if (!Number.isNaN(+ctx.params.list)) return user.lists.at(+ctx.params.list);

    for (const list of user.lists) {
      if (list.name === ctx.params.list) return list;
    }
  })();

  if (
    (await ctx.cookies.get('jwt')) &&
    (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
    ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
  ) {
    ctx.response.status = 200;
    ctx.response.body = {
      username: user.username,
      list,
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
      lists: (await controller.get({ username: user }))?.lists,
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

// get.get('/', async (ctx) => {
//   const listName = ctx.params.list;
//   const username = ctx.params.username;

//   if (
//     (await ctx.cookies.get('jwt')) &&
//     (await jwt.validate((await ctx.cookies.get('jwt')) as string)).isValid &&
//     ((await jwt.validate((await ctx.cookies.get('jwt')) as string)) as any)?.payload?.iss === username
//   ) {
//     const user = await controller.get({ username });
//     if (!user) {
//       ctx.response.status = 400;
//       ctx.response.body = {
//         username,
//         message: 'That user does not exist',
//       };

//       return;
//     }
//     const returnValue = !listName
//       ? user.lists
//       : (() => {
//           for (const list of user.lists) {
//             if (list.name === listName) return list;
//           }
//         })();

//     const propName = returnValue ? (Array.isArray(returnValue) ? 'lists' : 'holdings') : '';
//     ctx.response.status = 200;
//     ctx.response.body = {
//       username,
//       [propName]: returnValue,
//     };

//     return;
//   } else {
//     ctx.response.status = 401;
//     ctx.response.body = {
//       message: 'Invalid credentials',
//     };

//     return;
//   }
// });
