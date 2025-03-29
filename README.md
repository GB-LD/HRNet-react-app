# HRNet React App

HRNet est une application de gestion des employés développée avec React, Redux et Vite. Elle permet de créer, lister et gérer les informations des employés d'une entreprise.

## Fonctionnalités

- **Création d'employés** : Ajoutez de nouveaux employés via un formulaire interactif.
- **Liste des employés** : Consultez la liste des employés actuels avec des données mockées et celles ajoutées via Redux.
- **Validation des formulaires** : Les champs obligatoires sont validés avant l'envoi.
- **Gestion des états** : Utilisation de Redux pour gérer les états globaux de l'application.
- **UI moderne** : Utilisation de Tailwind CSS et Material Tailwind pour un design moderne et réactif.

## Structure du projet

Le projet est organisé comme suit :

```
src/
├── components/       # Composants réutilisables (atoms, molecules, organisms, templates)
├── redux/            # Gestion des états avec Redux
├── services/         # Services utilitaires (mock, formatage des données)
├── styles/           # Fichiers CSS (inclut Tailwind)
├── views/            # Pages principales de l'application
├── main.jsx          # Point d'entrée de l'application
```

## Prérequis

- Node.js (version 16 ou supérieure)
- npm

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/hrnet-react-app.git
   cd hrnet-react-app
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez l'application dans votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173).

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement.
- `npm run build` : Génère une version de production.
- `npm run preview` : Prévisualise la version de production.
- `npm run lint` : Analyse le code avec ESLint.

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **Redux Toolkit** : Gestion des états globaux.
- **Vite** : Outil de build rapide pour les projets modernes.
- **Tailwind CSS** : Framework CSS utilitaire.
- **Material Tailwind** : Composants UI basés sur Tailwind.
- **React Router** : Gestion des routes de l'application.

## Dépendances principales

- `@reduxjs/toolkit`
- `react`
- `react-redux`
- `react-router-dom`
- `tailwindcss`
- `@material-tailwind/react`
