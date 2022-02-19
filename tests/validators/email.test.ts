import { describe, expect, it, run } from '../deps.ts';
import * as validators from '../../src/server/validators/index.ts';

const emails = {
  pass: ['test@gmail.com'],
  fail: ['test.gmail.com', '', ' ', 'test@gmail', 'test@gmail,com'],
};

describe('Email', async () => {
  it('Should be invalid', async () => {
    for (const fail of emails.fail) {
      expect(validators.email(fail)).toBe(false);
    }
  });

  it('Should be valid', async () => {
    for (const pass of emails.pass) {
      expect(validators.email(pass)).toBe(true);
    }
  });
});

run();
