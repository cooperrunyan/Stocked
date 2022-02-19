import { describe, expect, it, run } from '../deps.ts';
import * as encryption from '../../src/server/encryption/index.ts';

const testValue = 'TestPassword1234';

describe('Hash', async () => {
  it('Should be equal', async () => {
    expect(await encryption.hash(testValue)).toBe(await encryption.hash(testValue));
  });
});

run();
