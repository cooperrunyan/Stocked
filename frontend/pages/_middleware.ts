import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export default async function handler(req: NextApiRequest, ev: any) {
  let isOnLoginPage = false;
  if (['/favicon.ico', '/manifest.json', '/sw.js'].includes(req.url as string)) return;

  [/login/gi, /signup/gi].forEach((regex) => {
    if (regex.test(req.url as string)) isOnLoginPage = true;
  });

  if (!req.cookies.jwt && !isOnLoginPage) return NextResponse.redirect(`/login?redirect=${req.url?.replace('/', '')}`);

  const response = await fetch(`http://localhost:5000/api/users/validate?token=${req.cookies.jwt}`);
  const data = await response.json();

  if (!data.valid && !isOnLoginPage) return NextResponse.redirect(`/login?redirect=${req.url?.replace('/', '')}`);

  if (data.valid && isOnLoginPage) return NextResponse.redirect(req.url?.replace(/login|signup/gi, '').replace('?redirect=', '') || '/dashboard');
  return;
}
