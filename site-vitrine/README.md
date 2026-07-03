# Site vitrine — VERDIER Électricité

Site statique autonome (HTML/CSS/JS vanilla, aucun framework, aucun CDN tiers) prêt à déployer.

## Fichiers
- `index.html` — page d'accueil (hero, services, pourquoi nous, réalisations, avis, zone d'intervention, FAQ, contact/devis)
- `mentions-legales.html`
- `politique-confidentialite.html`
- `styles.css` — feuille de style unique, partagée par les 3 pages
- `script.js` — menu mobile, accordéon FAQ, feedback formulaire (aucune dépendance)
- `assets/icons.svg` — sprite source des icônes ligne (le sprite est aussi inliné dans chaque page pour fonctionner hors-ligne sans requête)
- `assets/img/*.svg` — visuels placeholders (voir `alt=""` de chaque image pour la description du visuel réel attendu)
- `assets/favicon.svg`

## ⚠️ À compléter avant mise en ligne
Tous les champs `*****` dans le code (mentions légales, politique de confidentialité, footer, section contact) :
nom/prénom exploitant · forme juridique · email · SIREN · SIRET · n° RNE/RM · n° TVA (ou franchise art. 293 B) ·
assureur décennale (nom + adresse) · directeur de publication · médiateur de la consommation · concepteur du site ·
horaires d'ouverture.

## ⚠️ Polices — auto-hébergement non finalisé
Le brief demande des polices Montserrat/Inter auto-hébergées en `.woff2` local, sans aucun appel réseau. Aucun
fichier de police n'a été fourni et cet environnement ne peut pas télécharger de binaires depuis internet.
**En attendant les vrais fichiers**, `styles.css` déclare des piles de polices (`'Montserrat', ...` / `'Inter', ...`)
qui utilisent ces polices si le visiteur les a déjà installées, sinon basculent sur les polices système — **aucune
requête réseau n'est faite**, donc le cahier des charges "zéro cookie/traceur tiers" est respecté dès aujourd'hui.

Pour finaliser le vrai auto-hébergement :
1. Déposez `Montserrat-Variable.woff2` et `Inter-Variable.woff2` (ou les coupes de graisse nécessaires) dans `fonts/`.
2. Décommentez le bloc `@font-face` en haut de `styles.css`.

## Formulaire de devis
Le formulaire (`action="#"`) n'est pas branché à un back-end. Un commentaire dans `index.html` et `script.js`
indique où intégrer Formspree (ou équivalent).

## Conformité
- Aucun cookie non essentiel, aucun script analytics, aucune carte Google Maps intégrée (lien externe uniquement).
- Case de consentement du formulaire non pré-cochée.
- Footer identique et lien vers les 2 pages légales sur les 3 pages.
- JSON-LD `Electrician`/`LocalBusiness` avec note agrégée 5,0/14 dans `index.html`.
