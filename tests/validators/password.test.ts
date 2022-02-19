import { describe, expect, it, run } from '../deps.ts';
import * as validators from '../../src/server/validators/index.ts';

const passwords = {
  pass: ['TestPass1'],
  fail: ['testpassword', '', ' ', 'test pass', 'Testpassword', 'Test1', 'Test Pass1'],
};

describe('Password', async () => {
  it('Should be invalid', async () => {
    for (const fail of passwords.fail) {
      expect(validators.password(fail)).toBe(false);
    }
  });

  it('Should be valid', async () => {
    for (const pass of passwords.pass) {
      expect(validators.password(pass)).toBe(true);
    }
  });
});

run();
