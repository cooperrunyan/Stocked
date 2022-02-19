import { Volume } from './Volume.ts';

export class Holding {
  readonly symbol: string;
  public volumes: Volume[];

  constructor(symbol: string, volumes: Volume[]) {
    this.symbol = symbol;
    this.volumes = volumes;
  }

  public add(volume: Volume) {
    return this.volumes.push(volume);
  }

  public remove(index: number | Volume) {
    if (typeof index === 'number') return this.volumes.slice(index);
    return this.volumes.slice(this.volumes.indexOf(index));
  }
}
