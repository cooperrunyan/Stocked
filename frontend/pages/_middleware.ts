import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';

export default async function handler(req: NextApiRequest, ev: any) {
  if (['/favicon.ico', '/manifest.json', '/sw.js'].includes(req.url as string)) return;
  if (['/login', '/signup'].includes(req.url as string)) return;

  // console.log(NextResponse.redirect('/login'));

  if (!req.cookies.jwt) return NextResponse.redirect('/login');

  const response = await fetch(`http://localhost:5000/api/users/validate?token=${req.cookies.jwt}`);
  const data = await response.json();
  if (!data.valid) return NextResponse.redirect('/login');
  return;
}
