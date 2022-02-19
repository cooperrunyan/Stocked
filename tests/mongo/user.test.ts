import { describe, expect, it, run } from '../deps.ts';
import { Controller } from '../../src/server/mongo/index.ts';
import { env } from '../../src/deps.ts';

env();

console.log(Deno.env.get('SECRET'));

const controller = new Controller();

const username = 'siXO1GqnEkM4ptF_RUHCVNoZkgq_DroyLEHiPEWLCEb-SUK4vJH-ic_hm8fVlGKqeef9TB';
const email = 'test@cooperrunyan.com';
const password = 'TestPassword1234';

describe('User', async () => {
  it('Should create a user', async () => {
    await controller.create({
      username,
      email,
      password,
    });

    const user = await controller.get({ username });
    expect(user).not.toBe(undefined);
  });

  it('Should get a user', async () => {
    const user = await controller.get({ username });
    expect(user).not.toBe(undefined);
  });

  it('Should update a user', async () => {
    await controller.set({ username }, { email: 'test2@cooperrunyan.com' });
    const user = await controller.get({ username });
    expect(user?.email).toBe('test2@cooperrunyan.com');
  });

  it('Should delete a user', async () => {
    await controller.remove({
      username,
      password,
    });

    const user = await controller.get({ username });
    expect(user).toBe(undefined);
  });
});

run();
