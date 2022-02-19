import { describe, expect, it, run } from '../deps.ts';
import { jwt } from '../../src/server/encryption/index.ts';
import { env } from '../../src/deps.ts';

env();

console.log(Deno.env.get('SECRET'));

const testUsername = 'TestUser1234';

describe('JWT', async () => {
  it('Should be valid', async () => {
    expect((await jwt.validate(await jwt.create(testUsername))).isValid).toBe(true);
  });

  it('Should be invalid', async () => {
    expect((await jwt.validate((await jwt.create(testUsername)).slice(-1) + 'A')).isValid).toBe(false);
  });
});

run();
