import { Volume } from './Volume.ts';
import { Holdings } from './Holdings.ts';
import { Bson } from '../../deps.ts';
import { Holding } from './Holding.ts';

export class User {
  public username: string;
  public password: string;
  public email: string;
  public createdAt: Date;
  public _id: Bson.ObjectId;
  public lists: {
    name: string;
    holdings: Holdings;
  }[] = [];

  constructor({ username, password, email }: { username: string; password: string; email: string }) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.createdAt = new Date();
    this._id = new Bson.ObjectId();
  }
}
