import { getDatabase } from '@netlify/database';
import crypto from 'node:crypto';

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours
export const SESSION_COOKIE = 'session';
const SESSION_MAX_AGE_SECONDS = Math.floor(SESSION_DURATION_MS / 1000);

function hashPassword(password: string, salt: string) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function findUserByEmail(email: string) {
  const db = getDatabase();
  const rows = await db.sql`SELECT * FROM users WHERE email = ${email.toLowerCase()}`;
  return rows[0] || null;
}

export async function findUserById(id: number) {
  const db = getDatabase();
  const rows = await db.sql`SELECT * FROM users WHERE id = ${id}`;
  return rows[0] || null;
}

export async function createUser(input: {
  prenom: string;
  nom: string;
  email: string;
  password: string;
  profile?: string;
  collectivite?: string;
  poste?: string;
}) {
  const db = getDatabase();
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPassword(input.password, salt);
  const rows = await db.sql`
    INSERT INTO users (prenom, nom, email, password_hash, password_salt, profile, collectivite, poste)
    VALUES (${input.prenom}, ${input.nom}, ${input.email.toLowerCase()}, ${hash}, ${salt}, ${input.profile || ''}, ${input.collectivite || ''}, ${input.poste || ''})
    RETURNING *
  `;
  return rows[0];
}

export function verifyPassword(user: any, password: string) {
  const hash = hashPassword(password, user.password_salt);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(user.password_hash, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export async function createSession(userId: number) {
  const db = getDatabase();
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
  await db.sql`INSERT INTO sessions (token, user_id, expires_at) VALUES (${token}, ${userId}, ${expiresAt.toISOString()})`;
  return token;
}

export async function destroySession(token: string) {
  const db = getDatabase();
  await db.sql`DELETE FROM sessions WHERE token = ${token}`;
}

export async function getUserFromSession(token: string | null) {
  if (!token) return null;
  const db = getDatabase();
  const rows = await db.sql`SELECT * FROM sessions WHERE token = ${token}`;
  const session = rows[0];
  if (!session) return null;
  if (new Date(session.expires_at).getTime() < Date.now()) {
    await destroySession(token);
    return null;
  }
  return findUserById(session.user_id);
}

export function publicUser(user: any) {
  return {
    id: user.id,
    prenom: user.prenom,
    nom: user.nom,
    email: user.email,
    profile: user.profile,
    collectivite: user.collectivite,
    poste: user.poste,
  };
}

export function parseCookies(header: string | null) {
  const out: Record<string, string> = {};
  if (!header) return out;
  header.split(';').forEach((part) => {
    const idx = part.indexOf('=');
    if (idx === -1) return;
    const key = part.slice(0, idx).trim();
    const val = part.slice(idx + 1).trim();
    if (key) out[key] = decodeURIComponent(val);
  });
  return out;
}

export function sessionCookieHeader(token: string) {
  return `${SESSION_COOKIE}=${token}; HttpOnly; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax; Secure`;
}

export function clearSessionCookieHeader() {
  return `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax; Secure`;
}
