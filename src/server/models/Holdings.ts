import { Holding } from './Holding.ts';
import type { Symbol } from './Symbol.ts';

export type Holdings = { [key: Symbol]: Holding };
