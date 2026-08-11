import type { Config } from '@netlify/functions';
import {
  isValidEmail,
  findUserByEmail,
  createUser,
  createSession,
  publicUser,
  sessionCookieHeader,
} from '../lib/auth.mts';

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405 });
  }

  const body = await req.json().catch(() => ({}));
  const { prenom, nom, email, password, profile, collectivite, poste } = body;

  if (!prenom || !nom || !isValidEmail(email) || !password || String(password).length < 8) {
    return new Response(JSON.stringify({ error: 'invalid_fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (await findUserByEmail(email)) {
    return new Response(JSON.stringify({ error: 'email_taken' }), {
      status: 409,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const user = await createUser({ prenom, nom, email, password, profile, collectivite, poste });
    const token = await createSession(user.id);
    return new Response(JSON.stringify({ user: publicUser(user) }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': sessionCookieHeader(token),
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'email_taken' }), {
      status: 409,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const config: Config = {
  path: '/api/register',
};
