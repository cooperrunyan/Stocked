import { Bson } from '../../deps.ts';
import type { User, UserQuery, UserNoID } from '../../types.ts';
import { mongo } from '../config.ts';
import { client } from './client.ts';

export class Controller {
  private static users = client.database(mongo.database).collection<User>('users');

  /////////////////////////////////////////////////
  // CRUD
  async create(value: UserNoID | UserNoID[]) {
    if (Array.isArray(value)) return Controller.users.insertMany(value);
    return Controller.users.insertMany([value]);
  }

  async get(query?: UserQuery) {
    return Controller.users.findOne(this.selector(query));
  }

  async set(query: UserQuery, newValue: Partial<User>) {
    return Controller.users.updateOne(this.selector(query), {
      $set: newValue,
    });
  }

  async remove(query: Partial<User>) {
    if (Array.isArray(query)) return Controller.users.deleteMany(query);
    return Controller.users.deleteMany(query);
  }
  /////////////////////////////////////////////////

  async exists(query: UserQuery): Promise<boolean> {
    return !!(await this.get(query));
  }

  private selector(query?: UserQuery) {
    return typeof query === 'string' ? { _id: new Bson.ObjectId(query) } : query ? query : { _id: {} };
  }
}
