import { Bson } from '../../deps.ts';

export class User {
  public username: string;
  public password: string;
  public email: string;
  public date: Date;
  public _id: Bson.ObjectId;

  constructor({ username, password, email }: { username: string; password: string; email: string }) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.date = new Date();
    this._id = new Bson.ObjectId();
  }
}
