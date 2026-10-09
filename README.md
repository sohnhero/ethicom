# ETHICOM — Site institutionnel (refonte photographique)

Site institutionnel Next.js App Router (JavaScript / JSX), conçu à partir du document fourni pour ETHICOM. L'identité verte et ivoire a été conservée, mais l'architecture visuelle a été entièrement repensée pour être classique, premium, claire, responsive et photographique.

## Lancement

Pré-requis : Node.js >= 20.9 et npm.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Production

```bash
npm run test
npm run lint
npm run build
npm run start
```

Déployer sur Vercel après avoir défini les variables d'environnement. Le site est intégralement responsive. Les images sont locales (format WebP), optimisées et chargées par Next/Image.

## Personnalisation

- Contenu : `lib/content.js` et `app/page.jsx`
- Couleurs, responsive, composants : `app/globals.css`
- Logo et favicon : `public/brand/`
- Photographies illustratives : `public/photos/`
- Formulaire : `components/ContactForm.jsx`
- API contact : `app/api/contact/route.js`

### Formulaire et e-mail

Créer `.env.local` à partir de `.env.example` et configurer : `RESEND_API_KEY`, `ETHICOM_CONTACT_EMAIL`, `ETHICOM_FROM_EMAIL`. Vérifier le domaine expéditeur avec Resend et renseigner les adresses réelles. Sans cette configuration, aucun e-mail n'est envoyé et le formulaire affiche un message transparent ; le visiteur peut copier sa demande.

### Médias et contenus à confirmer

Les photographies sont des illustrations éditoriales générées ; elles ne montrent pas l'équipe réelle d'ETHICOM. Le portrait du fondateur n'a pas été inventé. Les informations non fournies (chiffres-clés, réalisations, références, partenaires, publications et coordonnées) ne sont pas présentées comme des faits confirmés. Faire approuver les mentions légales et les consentements du formulaire avant publication.

## Design et qualité

Voir `docs/REFONTE-2026.md` pour le concept, le système visuel et les limites des informations disponibles. Le fichier `preview.html` fournit une prévisualisation indépendante de Next.js.

## Architecture

`app/page.jsx` — landing page; `app/globals.css` — styles; `components/` — navigation, formulaire, animations, pied de page; `lib/content.js` — données éditoriales; `public/` — images locales et logo; `app/api/contact/route.js` — service de contact optionnel.
