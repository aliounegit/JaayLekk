# Teranga Délice - Restaurant Delivery Platform

Application de livraison de restaurants pour Dakar et Rufisque, Sénégal.

## 🚀 Fonctionnalités

- 🍽️ **Menu complet** avec filtrage par catégorie
- 🛒 **Panier intelligent** avec gestion des quantités
- 💳 **Paiement mobile** Wave et Orange Money
- 📦 **Suivi de commande** en temps réel
- 🏪 **50+ restaurants partenaires**
- 📱 **Design responsive** (mobile, tablet, desktop)

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TailwindCSS 4, Framer Motion
- **Components**: Radix UI, Lucide Icons
- **Language**: TypeScript

## 📋 Prérequis

- Node.js 20+ 
- npm ou yarn

## 🔧 Installation

```bash
# Cloner le repository
git clone <your-repo-url>
cd teranga-delice

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

## 🏗️ Build de Production

```bash
# Créer le build optimisé
npm run build

# Lancer le serveur de production
npm start
```

## 🌐 Déploiement sur Render

### Étape 1: Préparer le Repository

1. Créer un repository GitHub
2. Pousser le code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Étape 2: Configurer Render

1. Aller sur [render.com](https://render.com)
2. Créer un compte ou se connecter
3. Cliquer sur "New +" → "Web Service"
4. Connecter votre repository GitHub
5. Configurer le service:

**Configuration:**
- **Name**: `teranga-delice`
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Instance Type**: `Free` (ou `Starter` pour de meilleures performances)

### Étape 3: Variables d'Environnement (Optionnel)

Dans l'onglet "Environment" de Render, ajouter:

```
NEXT_PUBLIC_SITE_URL=https://teranga-delice.onrender.com
NODE_ENV=production
```

### Étape 4: Déployer

1. Cliquer sur "Create Web Service"
2. Render va automatiquement:
   - Installer les dépendances
   - Builder l'application
   - Déployer sur une URL publique

Votre site sera disponible sur: `https://teranga-delice.onrender.com`

## 📁 Structure du Projet

```
teranga-delice/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── page.tsx           # Page d'accueil
│   │   ├── menu/              # Page menu
│   │   ├── checkout/          # Page paiement
│   │   ├── restaurants/       # Page restaurants
│   │   ├── contact/           # Page contact
│   │   └── order-confirmation/ # Confirmation commande
│   ├── components/
│   │   └── ui/                # Composants UI (Button, etc.)
│   └── lib/
│       ├── cart-context.tsx   # Context du panier
│       └── utils.ts           # Utilitaires
├── public/                     # Assets statiques
└── package.json
```

## 🎨 Pages Disponibles

- `/` - Page d'accueil
- `/menu` - Menu des restaurants
- `/restaurants` - Liste des restaurants partenaires
- `/contact` - Formulaire de contact
- `/checkout` - Page de paiement
- `/order-confirmation` - Confirmation de commande

## 💳 Paiements

**Note**: Les paiements Wave et Orange Money sont actuellement **simulés** pour la démonstration.

Pour une intégration réelle:
- Wave: https://www.wave.com/en/business/
- Orange Money: Contacter Orange Senegal

## 🔄 Mises à Jour Automatiques

Render redéploie automatiquement à chaque push sur la branche `main`.

```bash
# Faire des modifications
git add .
git commit -m "Description des changements"
git push origin main
```

## 📞 Support

Pour toute question ou problème:
- Email: contact@teranga-delice.sn
- Téléphone: +221 77 123 45 67

## 📄 Licence

© 2025 Teranga Délice. Tous droits réservés.

---

**Fait par ALIOUNE NDIAYE au Sénégal**
