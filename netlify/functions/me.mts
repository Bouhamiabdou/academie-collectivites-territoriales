import type { Config } from '@netlify/functions';
import { parseCookies, getUserFromSession, publicUser, SESSION_COOKIE } from '../lib/auth.mts';

export default async (req: Request) => {
  const cookies = parseCookies(req.headers.get('cookie'));
  const user = await getUserFromSession(cookies[SESSION_COOKIE] || null);

  return new Response(JSON.stringify({ user: user ? publicUser(user) : null }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config: Config = {
  path: '/api/me',
};
