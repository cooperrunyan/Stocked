import { MongoClient, env } from '../../deps.ts';
import { mongo } from '../config.ts';

env();

export const client = new MongoClient();
await client.connect({
  db: mongo.database,
  tls: mongo.tls,
  servers: mongo.servers.map((host) => {
    return {
      host,
      port: 27017,
    };
  }),
  credential: {
    username: Deno.env.get('DB_USERNAME'),
    password: Deno.env.get('DB_PASSWORD'),
    mechanism: mongo.mechanism,
    db: mongo.database,
  },
});
