import { Bson } from './deps.ts';

export interface UserNoID {
  username: string;
  password: string;
  email: string;
}

export type User = UserNoID & {
  _id: Bson.ObjectId;
};

export type UserQuery = Partial<User> | string;
export type UserQueryNoID = Partial<UserNoID> | string;
