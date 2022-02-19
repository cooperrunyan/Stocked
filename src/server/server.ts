import { app } from './app.ts';
import { env } from '../deps.ts';

env();
await app.listen({ port: +Deno.env.get('PORT')! });
