# Académie des Collectivités Territoriales

Plateforme universitaire de formation des **élus et fonctionnaires des collectivités
territoriales**, portée par la FSJES Casablanca et la Région Casablanca-Settat.

Le site présente le programme, le calendrier des sessions, les propositions de
formation, et gère les **comptes et inscriptions** des participants.

## Deux façons de faire tourner le même site

C'est le point à comprendre avant de toucher au code : il existe **deux backends
qui servent le même dossier `public/` et exposent la même API**, l'un pour le
développement local, l'autre pour la production.

| | Local | Production |
|---|---|---|
| Point d'entrée | `server.mjs` | `netlify/functions/*.mts` |
| Base de données | SQLite (`node:sqlite`) via `db.mjs`, fichier `data/academie.db` créé au démarrage | Postgres via `@netlify/database`, schéma dans `netlify/database/migrations/` |
| Lancement | `npm start` → <http://localhost:8766> | déploiement Netlify |

Les deux schémas (`users`, `sessions`) sont volontairement identiques. **Si vous
ajoutez une colonne, ajoutez-la des deux côtés** : dans le `CREATE TABLE` de
`db.mjs` *et* dans une migration SQL — sinon le local et la production divergent
silencieusement.

## Lancer en local

```bash
npm install
npm start
```

Puis <http://localhost:8766>. Sous Windows, `Lancer le site.bat` ou `lancer.ps1`
font la même chose en un double-clic.

`node:sqlite` demande une version récente de Node (22+).

## API

Quatre routes, identiques en local et en production :

| Méthode | Route | Rôle |
|---|---|---|
| `POST` | `/api/register` | création de compte |
| `POST` | `/api/login` | connexion |
| `POST` | `/api/logout` | déconnexion |
| `GET` | `/api/me` | utilisateur de la session courante |

**Sessions.** L'authentification repose sur un cookie de session `HttpOnly`,
`SameSite=Lax`, adossé à la table `sessions`. Les mots de passe sont stockés
hachés avec un sel par utilisateur (`password_hash` + `password_salt`) — jamais en
clair. La logique commune est dans `auth.mjs` (local) et `netlify/lib/auth.mts`
(production).

## Le front

`public/` est du HTML/CSS/JS sans framework ni build.

- `js/i18n.js` — traductions, via des attributs `data-i18n` posés dans le HTML
- `js/programme-data.js` + `programme-render.js` — le programme est **des données,
  pas du HTML** : pour modifier une formation, éditer le fichier de données
- `js/calendar-data.js` + `calendar-render.js` — même principe pour le calendrier
- `js/auth.js` — appels aux quatre routes ci-dessus
- `js/forms.js` — validation des formulaires

Ce découpage données / rendu est la convention du projet : ajouter une session de
formation ne devrait jamais demander de toucher au HTML.

## Structure

```
public/            le site (servi tel quel)
server.mjs         serveur local : statique + API
auth.mjs  db.mjs   authentification et SQLite en local
netlify/functions/ la même API, en production
netlify/database/  migrations Postgres
```
