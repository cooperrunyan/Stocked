import type { User } from './server/models/index.ts';

export type UserQuery = Partial<User> | string;
