import type { Config } from '@netlify/functions';
import { isValidEmail, findUserByEmail, verifyPassword, createSession, publicUser, sessionCookieHeader } from '../lib/auth.mts';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405 });
  }

  const body = await req.json().catch(() => ({}));
  const { email, password } = body;

  const user = isValidEmail(email) ? await findUserByEmail(email) : null;
  if (!user || !verifyPassword(user, password || '')) {
    return new Response(JSON.stringify({ error: 'invalid_credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const token = await createSession(user.id);
  return new Response(JSON.stringify({ user: publicUser(user) }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': sessionCookieHeader(token),
    },
  });
};

export const config: Config = {
  path: '/api/login',
};
