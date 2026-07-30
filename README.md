# Haut de Page — landing

Landing page de la newsletter **Haut de Page** (hautdepage.fr). Un seul job :
convertir un visiteur en abonné email.

## Stack

- Next.js (App Router) + TypeScript + Tailwind
- Aucune base de données, aucune auth, aucun CMS
- Quasi 100 % statique. Une seule route serveur dynamique : la Server Action
  d'inscription (`app/actions/subscribe.ts`), qui appelle l'API beehiiv.
  La clé API reste **server-only** et n'atteint jamais le client.

## Démarrer en local

```bash
npm install
cp .env.example .env.local   # puis renseigner les valeurs
npm run dev
```

## Variables d'environnement

| Variable                  | Obligatoire | Rôle                                                                 |
| ------------------------- | ----------- | -------------------------------------------------------------------- |
| `BEEHIIV_API_KEY`         | oui         | Clé API beehiiv (server-only, jamais exposée au client).             |
| `BEEHIIV_PUBLICATION_ID`  | oui         | ID de la publication beehiiv (`pub_...`).                            |
| `NEXT_PUBLIC_ARCHIVE_URL` | non         | URL de l'archive beehiiv. Absente → la section « Dernières éditions » est masquée. |

## Déploiement Vercel

1. Importer le repo GitHub dans Vercel.
2. Renseigner les 3 variables ci-dessus dans **Settings → Environment Variables**
   (`BEEHIIV_API_KEY` et `BEEHIIV_PUBLICATION_ID` obligatoires ;
   `NEXT_PUBLIC_ARCHIVE_URL` optionnelle).
3. Déployer.

## Assets à remplacer (placeholders actuels)

Le logo, le favicon et l'image OG sont des **placeholders** reconstitués. Pour
brancher les fichiers définitifs :

- **Logo** : `components/Logo.tsx` + `components/ThreeBars.tsx`
- **Favicon / icône Apple** : `app/icon.tsx`, `app/apple-icon.tsx`
  (ou déposer `app/favicon.ico` / `app/icon.png` pour écraser le généré)
- **Image OG** : `app/opengraph-image.tsx`
- **Photo de l'auteur** : déposer le fichier dans `/public` puis renseigner
  `AUTHOR_PHOTO` dans `components/Author.tsx`
