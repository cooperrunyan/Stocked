import jsonwebtoken from '@tsndr/cloudflare-worker-jwt';
import { NextApiRequest } from 'next';

export async function validate(req: NextApiRequest) {
  const jwt = req.cookies.jwt;
  try {
    const username = (jsonwebtoken.decode(jwt) as any)?.iss!;
    const valid = (jwt && (await jsonwebtoken.verify(jwt, process.env.NEXT_PUBLIC_SECRET!)))!;
    if (!username || !valid) return [false, null];

    return [true, valid];
  } catch (err) {
    return [false, null];
  }
}
