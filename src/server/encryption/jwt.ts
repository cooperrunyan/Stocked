import { setExpiration, makeJwt, validateJwt, env } from '../../deps.ts';
env();

export async function create(payload: string) {
  return makeJwt({
    header: {
      alg: 'HS256',
      typ: 'KWT',
    },
    payload: {
      iss: payload,
      exp: setExpiration(new Date().getTime() + 60000),
    },
    key: Deno.env.get('SECRET')!,
  });
}

export async function validate(jwt: string) {
  return validateJwt({ key: Deno.env.get('SECRET')!, jwt, algorithm: 'HS256' });
}
