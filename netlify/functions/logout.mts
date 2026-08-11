import type { Config } from '@netlify/functions';
import { parseCookies, destroySession, clearSessionCookieHeader, SESSION_COOKIE } from '../lib/auth.mts';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405 });
  }

  const cookies = parseCookies(req.headers.get('cookie'));
  if (cookies[SESSION_COOKIE]) await destroySession(cookies[SESSION_COOKIE]);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': clearSessionCookieHeader(),
    },
  });
};

export const config: Config = {
  path: '/api/logout',
};
