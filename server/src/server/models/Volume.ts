export class Volume {
  public readonly initialPrice: number;
  public readonly boughtAt: Date;
  public readonly id: string;

  constructor(initialPrice: number, boughtAt: Date) {
    this.initialPrice = initialPrice;
    this.boughtAt = boughtAt;
    this.id = crypto.randomUUID();
  }
}
