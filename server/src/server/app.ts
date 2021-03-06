import { oak, oakCors } from '../deps.ts';
import * as routers from './routers/index.ts';
import * as middlewares from './middleware/index.ts';

export const app = new oak.Application();

app.addEventListener('listen', (e) => console.log(`App running on port: ${e.port}`));
app.addEventListener('error', (e) => console.error(e.error));

const api = new oak.Router({ prefix: '/api' });

app.use(
  oakCors({
    origin: 'http://localhost:3000',
  }),
);

api.use(middlewares.logger);
api.use(middlewares.protectServer);

Object.values(routers).forEach((router) => {
  api.use(router.routes());
  api.use(router.allowedMethods());
});

app.use(api.routes());
app.use(api.allowedMethods());
