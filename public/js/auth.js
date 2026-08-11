/* Authentification : état de session dans le header, connexion, création de compte */

async function fetchCurrentUser() {
  try {
    const res = await fetch('/api/me', { credentials: 'same-origin' });
    const data = await res.json();
    return data.user || null;
  } catch {
    return null;
  }
}

function translateError(code) {
  const lang = getLang();
  const entry = TRANSLATIONS['auth.error.' + code];
  return entry ? entry[lang] : TRANSLATIONS['auth.error.server_error'][lang];
}

function renderAuthArea(user) {
  const el = document.getElementById('authArea');
  if (!el) return;
  const lang = getLang();
  if (user) {
    el.innerHTML =
      '<span class="utility-link">' + TRANSLATIONS['nav.hello'][lang] + ', ' + user.prenom + '</span>' +
      '<button type="button" class="utility-link auth-link-btn" id="logoutBtn">' + TRANSLATIONS['nav.logout'][lang] + '</button>';
    const btn = document.getElementById('logoutBtn');
    if (btn) {
      btn.addEventListener('click', async () => {
        await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' });
        window.location.href = 'index.html';
      });
    }
  } else {
    el.innerHTML = '<a href="connexion.html" class="utility-link">' + TRANSLATIONS['nav.login'][lang] + '</a>';
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const user = await fetchCurrentUser();
  renderAuthArea(user);
  document.addEventListener('langchange', () => renderAuthArea(user));

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errorEl = document.getElementById('loginError');
      errorEl.style.display = 'none';
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          errorEl.textContent = translateError(data.error);
          errorEl.style.display = 'block';
          return;
        }
        window.location.href = 'index.html';
      } catch {
        errorEl.textContent = translateError('server_error');
        errorEl.style.display = 'block';
      }
    });
  }

  const registerAccountForm = document.getElementById('registerAccountForm');
  if (registerAccountForm) {
    registerAccountForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const errorEl = document.getElementById('registerError');
      errorEl.style.display = 'none';

      const prenom = document.getElementById('accPrenom').value.trim();
      const nom = document.getElementById('accNom').value.trim();
      const email = document.getElementById('accEmail').value.trim();
      const password = document.getElementById('accPassword').value;
      const confirm = document.getElementById('accConfirm').value;
      const profile = document.getElementById('accProfile').value;
      const collectivite = document.getElementById('accCollectivite').value.trim();
      const poste = document.getElementById('accPoste').value.trim();

      if (password !== confirm) {
        errorEl.textContent = translateError('password_mismatch');
        errorEl.style.display = 'block';
        return;
      }

      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ prenom, nom, email, password, profile, collectivite, poste }),
        });
        const data = await res.json();
        if (!res.ok) {
          errorEl.textContent = translateError(data.error);
          errorEl.style.display = 'block';
          return;
        }
        window.location.href = 'index.html';
      } catch {
        errorEl.textContent = translateError('server_error');
        errorEl.style.display = 'block';
      }
    });
  }
});
