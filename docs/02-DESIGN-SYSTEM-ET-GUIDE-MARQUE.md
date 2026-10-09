# Design system ETHICOM — Direction institutionnelle 2026

## Identité

- Tonalité : institutionnelle, accessible, sérieuse, optimiste et contemporaine.
- Logo : fichier vectoriel `public/brand/ethicom-logo.svg`. Conserver les proportions et une zone de protection au moins égale à la hauteur de la marque graphique.
- Couleurs : `#153B32` vert principal ; `#122B25` vert foncé ; `#F6F5EF` ivoire ; `#FFFEFA` blanc cassé ; `#D9E989` accent doux pour les CTA et repères ; `#C7A578` or discret ; `#17221D` texte principal ; `#67736E` texte secondaire.
- Typographies : Manrope titres/navigation, DM Sans pour le contenu ; polices de repli disponibles en absence de réseau.

## Composants

Navigation pill arrondie, boutons ovales lisibles, deux colonnes dans le hero, photographie de contexte, cartes de services colorées, détails par accordéons natifs, panneaux contact et pied de page institutionnel.

## Responsive

Composition desktop 4 cartes, tablette 2 cartes, mobile 1 carte. Passer le hero en une colonne et afficher le texte avant la photographie sur petits écrans. Menu mobile accessible et interactions compatibles tactile.

## Images

Photographies générées spécifiquement pour la maquette ; leur rôle est **illustratif**, aucune n'est présentée comme représentant le personnel ou les locaux réels. Remplacer par les médias officiels du cabinet lorsque disponibles.

## Affichage / motion

Gérer les proportions avec `object-fit: cover`, éviter les overlays écrasant le contenu, limiter les animations aux révélations discrètes, respecter `prefers-reduced-motion`.
