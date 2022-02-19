import { oak } from '../deps.ts';
import * as routers from './routers/index.ts';
import * as middlewares from './middleware/index.ts';

export const app = new oak.Application();

app.addEventListener('listen', (e) => console.log(`App running on port: ${e.port}`));
app.addEventListener('error', (e) => console.error(e.error));

const api = new oak.Router({ prefix: '/api' });

api.use(middlewares.logger);

Object.values(routers).forEach((router) => {
  api.use(router.routes());
  api.use(router.allowedMethods());
});

app.use(api.routes());
app.use(api.allowedMethods());
