import { describe, expect, it, run } from '../deps.ts';
import * as encryption from '../../src/server/encryption/index.ts';

const testValue = 'TestPassword1234';
const notTestValue = 'NOTTestPassword1234';

const TEST_SECRET = 'siXO1GqnEkM4ptF_RUHCVNoZkgq_DroyLEHiPEWLCEb-SUK4vJH-ic_hm8fVlGKqeef9TB';
Deno.env.set('SECRET', TEST_SECRET);

describe('Hash', async () => {
  it('Should evaluate to true', async () => {
    expect(await encryption.evaluate(testValue, await encryption.hash(testValue))).toBe(true);
  });

  it('Should evaluate to false', async () => {
    expect(await encryption.evaluate(notTestValue, await encryption.hash(testValue))).toBe(false);
    expect(await encryption.evaluate(testValue, await encryption.hash(notTestValue))).toBe(false);
  });
});

run();
