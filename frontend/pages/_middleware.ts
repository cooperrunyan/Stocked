import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

import { validate } from 'src/hooks/validate';

export default async function handler(req: NextApiRequest, ev: any) {
  let isOnLoginPage = false;
  if (['/favicon.ico', '/manifest.json', '/sw.js'].includes(req.url as string)) return;

  [/login/gi, /signup/gi].forEach((regex) => {
    if (regex.test(req.url as string)) isOnLoginPage = true;
  });

  if (!req.cookies.jwt && !isOnLoginPage) return NextResponse.redirect(`/login`);

  const [valid, value] = await validate(req);

  if (!valid && !isOnLoginPage) return NextResponse.redirect(`/login`);
  if (valid && isOnLoginPage) return NextResponse.redirect('/dashboard');

  return;
}
