import { describe, expect, it, run } from '../deps.ts';
import * as encryption from '../../src/server/encryption/index.ts';

const testValue = 'TestPassword1234';

const TEST_SECRET = 'siXO1GqnEkM4ptF_RUHCVNoZkgq_DroyLEHiPEWLCEb-SUK4vJH-ic_hm8fVlGKqeef9TB';
Deno.env.set('SECRET', TEST_SECRET);

describe('Hash', async () => {
  it('Should be equal', async () => {
    expect(await encryption.hash(testValue)).toBe(await encryption.hash(testValue));
  });
});

run();
