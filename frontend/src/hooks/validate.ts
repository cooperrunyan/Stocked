import jsonwebtoken from '@tsndr/cloudflare-worker-jwt';
import { NextApiRequest } from 'next';

export function validate(req: NextApiRequest) {
  const jwt = req.cookies.jwt;
  try {
    const token = (jwt && (jsonwebtoken.verify(jwt, process.env.NEXT_PUBLIC_SECRET!) as string | any))!;
    if ((typeof token !== 'string' ? token.iss! : token).trim() === '') return [false, null];

    return [true, typeof token !== 'string' ? token.iss! : token];
  } catch (err) {
    return [false, null];
  }
}
