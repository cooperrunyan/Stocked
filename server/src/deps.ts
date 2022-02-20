export { oakCors } from 'https://deno.land/x/cors/mod.ts';
export * as oak from 'https://deno.land/x/oak@v10.2.1/mod.ts';
export { Bson, MongoClient } from 'https://deno.land/x/mongo@v0.29.1/mod.ts';
export * as yml from 'https://deno.land/std@0.125.0/encoding/yaml.ts';
export { hmac } from 'https://deno.land/x/hmac@v1.0.2/mod.ts';

import { config } from 'https://deno.land/x/dotenv/mod.ts';
export const env = () => Object.entries(config()).forEach(([key, value]) => Deno.env.set(key, value));

export { makeJwt, setExpiration } from 'https://deno.land/x/djwt@v1.7/create.ts';
export { validateJwt } from 'https://deno.land/x/djwt@v1.7/validate.ts';
export { parse } from 'https://raw.githubusercontent.com/mayankchoubey/deno-body-parser/main/mod.ts';
