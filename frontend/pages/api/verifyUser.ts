import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { validate } from 'src/hooks/validate';

export default async function handler(req: NextApiRequest, res: any) {
  if (!req.cookies.jwt) return NextResponse.redirect(`/login`);

  const [valid, value] = await validate(req);

  return new Response(
    JSON.stringify({
      valid,
      username: value,
    }),
  );
}
