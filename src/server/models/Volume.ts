import { Bson } from '../../deps.ts';

export class Volume {
  public readonly initialPrice: number;
  public readonly boughtAt: Date;
  public readonly id: Bson.ObjectId;

  constructor(initialPrice: number, boughtAt: Date) {
    this.initialPrice = initialPrice;
    this.boughtAt = boughtAt;
    this.id = new Bson.ObjectId();
  }
}
