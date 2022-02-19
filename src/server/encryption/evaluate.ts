import { hash } from './hash.ts';

export async function evaluate(message: string, encrypted: string) {
  if (message === encrypted || (await hash(message)) === encrypted) return true;
  return false;
}
