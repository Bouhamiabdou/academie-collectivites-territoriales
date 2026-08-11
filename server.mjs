import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createUser,
  findUserByEmail,
  verifyPassword,
  createSession,
  destroySession,
  getUserFromSession,
  publicUser,
  parseCookies,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
} from './auth.mjs';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(projectRoot, 'public');
const PORT = 8766;
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
      if (data.length > 1e6) req.destroy();
    });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(body);
}

function setSessionCookie(res, token) {
  res.setHeader(
    'Set-Cookie',
    `${SESSION_COOKIE}=${token}; HttpOnly; Path=/; Max-Age=${SESSION_MAX_AGE_SECONDS}; SameSite=Lax`
  );
}

function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`);
}

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function handleApi(req, res, pathname) {
  if (req.method === 'POST' && pathname === '/api/register') {
    const body = JSON.parse((await readBody(req)) || '{}');
    const { prenom, nom, email, password, profile, collectivite, poste } = body;
    if (!prenom || !nom || !isValidEmail(email) || !password || String(password).length < 8) {
      sendJson(res, 400, { error: 'invalid_fields' });
      return true;
    }
    if (findUserByEmail(email)) {
      sendJson(res, 409, { error: 'email_taken' });
      return true;
    }
    try {
      const userId = createUser({ prenom, nom, email, password, profile, collectivite, poste });
      const { token } = createSession(userId);
      setSessionCookie(res, token);
      sendJson(res, 201, { user: publicUser(findUserByEmail(email)) });
    } catch {
      sendJson(res, 409, { error: 'email_taken' });
    }
    return true;
  }

  if (req.method === 'POST' && pathname === '/api/login') {
    const body = JSON.parse((await readBody(req)) || '{}');
    const { email, password } = body;
    const user = isValidEmail(email) ? findUserByEmail(email) : null;
    if (!user || !verifyPassword(user, password || '')) {
      sendJson(res, 401, { error: 'invalid_credentials' });
      return true;
    }
    const { token } = createSession(user.id);
    setSessionCookie(res, token);
    sendJson(res, 200, { user: publicUser(user) });
    return true;
  }

  if (req.method === 'POST' && pathname === '/api/logout') {
    const cookies = parseCookies(req.headers.cookie);
    if (cookies[SESSION_COOKIE]) destroySession(cookies[SESSION_COOKIE]);
    clearSessionCookie(res);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (req.method === 'GET' && pathname === '/api/me') {
    const cookies = parseCookies(req.headers.cookie);
    const user = getUserFromSession(cookies[SESSION_COOKIE]);
    sendJson(res, 200, { user: user ? publicUser(user) : null });
    return true;
  }

  return false;
}

function serveStatic(req, res, pathname) {
  const urlPath = pathname === '/' ? '/index.html' : pathname;
  const filePath = path.join(root, decodeURIComponent(urlPath));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('403');
    return;
  }
  try {
    const data = fs.readFileSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const type = mime[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('404');
  }
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (pathname.startsWith('/api/')) {
    try {
      const handled = await handleApi(req, res, pathname);
      if (handled) return;
    } catch {
      sendJson(res, 500, { error: 'server_error' });
      return;
    }
    res.writeHead(404);
    res.end('404');
    return;
  }

  serveStatic(req, res, pathname);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('READY');
});
