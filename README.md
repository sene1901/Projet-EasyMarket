# EasyMarket — Site Vitrine
Intégration front-end du site vitrine EasyMarket, réalisée dans le cadre d’une épreuve technique pour un poste de développeur web e-commerce.


Objectif du projet:

Ce projet consiste à intégrer une maquette Figma en une application web moderne, responsive et performante, mettant en valeur la solution EasyMarket destinée aux commerçants.

## Lancer le projet

npm install
npm run dev       # dev sur http://localhost:5173
npm run build     # build de production
npm run preview   # prévisualiser le build


## Choix techniques

| Technologie | Raison |
|---|---|
| Vite + React | Build ultra-rapide, HMR instantané |
| Tailwind CSS v3 | Utility-first, responsive natif |
| Framer Motion | Animations fluides et déclaratives |

## Architecture

src/
├── components/        Composants atomiques réutilisables
│   ├── Button.jsx          variantes primary / outline / ghost
│   ├── Badge.jsx           badge animé
│   ├── SectionTitle.jsx    titre standardisé
│   ├── FeatureCard.jsx     carte fonctionnalité
│   ├── TestimonialCard.jsx carte témoignage
│   └── PricingCard.jsx     carte tarif
├── sections/          Sections de la page
│   ├── Navbar.jsx     navigation responsive
│   ├── Hero.jsx       hero + dashboard preview
│   ├── Features.jsx   grille fonctionnalités
│   ├── Pricing.jsx    plans tarifaires
│   ├── Testimonials.jsx   avis clients ,Cartes stylisées avec citations
|   ├── BoutiquesSection.jsx  Présentation de produits ou services Cartes produits (image, prix, bouton)
|   ├── Pricing.jsx   Plans tarifaires ,Mise en avant du plan recommandé
|   ├── CTASection.jsx
|   ├── PartenairesSection.jsx
|   ├── ContactSection.jsx    Formulaire utilisateur,Validation des champs
│   └── Footer.jsx    pied de page Liens rapides,Réseaux sociaux,Informations légales
Copyright
└── pages/
    └── LandingPage.jsx composition de toutes les sections


## SEO & GTM

- Balises meta Open Graph dans index.html
- Fonts préchargées avec rel="preconnect"
- Commentaire GTM prêt (remplacer GTM-XXXXXXX)
- Responsive mobile-first

## Améliorations avec plus de temps

1. Intégration pixel-perfect de la maquette Figma réelle
2. Formulaire de contact fonctionnel (EmailJS / Node.js)
3. Routing React Router pour pages dédiées
4. Google Analytics 4 complet via GTM
5. Tests E2E avec Playwright
6. Mode clair/sombre avec persistance
