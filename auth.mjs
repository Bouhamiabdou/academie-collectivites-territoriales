import crypto from 'node:crypto';
import { db } from './db.mjs';

const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}

export function createUser({ prenom, nom, email, password, profile, collectivite, poste }) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = hashPassword(password, salt);
  const stmt = db.prepare(`
    INSERT INTO users (prenom, nom, email, password_hash, password_salt, profile, collectivite, poste, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(prenom, nom, email.toLowerCase(), hash, salt, profile || '', collectivite || '', poste || '', new Date().toISOString());
  return Number(info.lastInsertRowid);
}

export function findUserByEmail(email) {
  const stmt = db.prepare('SELECT * FROM users WHERE email = ?');
  return stmt.get(email.toLowerCase());
}

export function findUserById(id) {
  const stmt = db.prepare('SELECT * FROM users WHERE id = ?');
  return stmt.get(id);
}

export function verifyPassword(user, password) {
  const hash = hashPassword(password, user.password_salt);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(user.password_hash, 'hex');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

export function createSession(userId) {
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString();
  db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, userId, expiresAt);
  return { token, expiresAt };
}

export function destroySession(token) {
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
}

export function getUserFromSession(token) {
  if (!token) return null;
  const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
  if (!session) return null;
  if (new Date(session.expires_at).getTime() < Date.now()) {
    destroySession(token);
    return null;
  }
  return findUserById(session.user_id);
}

export function publicUser(user) {
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

export function parseCookies(header) {
  const out = {};
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

export const SESSION_COOKIE = 'session';
export const SESSION_MAX_AGE_SECONDS = Math.floor(SESSION_DURATION_MS / 1000);
