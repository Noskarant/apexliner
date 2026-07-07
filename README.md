# APEX LINER

Site vitrine premium pour APEX LINER, entreprise suisse spécialisée dans les films solaires bâtiment, le covering, le marquage publicitaire et les films adhésifs pour vitrages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Site statique, sans backend
- Formulaire de contact via `mailto:Contact@apexliner.ch`

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Vérifier

```bash
npm run lint
npm run build
```

## Assets

Les images sont dans `public/images` :

- `logo-wide.jpeg`
- `logo-vertical.jpeg`
- `reference-01.jpg`
- `reference-02.jpg`

Les placeholders et références peuvent être remplacés sans modifier l’architecture.

## Déploiement

Le projet est configuré pour GitHub Pages via GitHub Actions.

URL de preview GitHub Pages :

```text
https://noskarant.github.io/apexliner/
```

Dans GitHub, vérifier que `Settings > Pages > Build and deployment > Source` est configuré sur `GitHub Actions`.

Pour connecter `apexliner.ch` plus tard, ajouter le domaine côté hébergeur choisi puis configurer les DNS chez le registrar.
