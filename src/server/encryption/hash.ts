import { hmac, env } from '../../deps.ts';
env();

export async function hash(message: string) {
  return hmac('sha512', Deno.env.get('SECRET')!, message, 'utf8', 'base64') as string;
}
