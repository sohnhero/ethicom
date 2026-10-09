# Contrôle de qualité — Refonte ETHICOM

## Vérifications réalisées

- 5 tests de source Node.js couvrant la fidélité des contenus, le parcours, les assets locaux, le responsive et le service de contact.
- Tests de rendu de la prévisualisation HTML en Chromium aux largeurs 320, 390, 768, 1024 et 1440 px. Aucune largeur de scroll supérieure au viewport. 8 images chargées sur 8, et les 9 sections attendues présentes.
- Menu mobile vérifié : ouverture, état `aria-expanded` et fermeture via la touche `Escape`.
- Captures visuelles dans `docs/Apercu-desktop.png`, `docs/Apercu-tablette.png`, `docs/Apercu-mobile.png`.

## Limites

- L'installation npm et `next build` ne pouvaient pas être exécutés sur cette machine hors-ligne, et ne sont donc **pas déclarés comme vérifiés**. À faire avant publication avec Node.js et npm.
- Les captures proviennent d'une prévisualisation HTML générée depuis les composants JSX avec les mêmes styles et contenus, sans runtime React. Les interactions Next.js doivent aussi être validées en environnement de développement.
- Les polices Google peuvent nécessiter une connexion internet ; une pile de polices de remplacement est spécifiée.
- La configuration d'e-mail et les mentions légales réelles restent à renseigner.
