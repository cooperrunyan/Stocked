import { describe, expect, it, run } from '../deps.ts';
import { jwt } from '../../src/server/encryption/index.ts';

const testUsername = 'TestUser1234';

const TEST_SECRET = 'siXO1GqnEkM4ptF_RUHCVNoZkgq_DroyLEHiPEWLCEb-SUK4vJH-ic_hm8fVlGKqeef9TB';
Deno.env.set('SECRET', TEST_SECRET);

describe('JWT', async () => {
  it('Should be valid', async () => {
    expect((await jwt.validate(await jwt.create(testUsername))).isValid).toBe(true);
  });

  it('Should be invalid', async () => {
    expect((await jwt.validate((await jwt.create(testUsername)).slice(-1) + 'A')).isValid).toBe(false);
  });
});

run();
