import Image from "next/image";
import { ArrowIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Pied de page institutionnel">
      <div className="container footer-main">
        {/* Brand identity column */}
        <div className="footer-identity">
          <a href="#accueil" aria-label="ETHICOM, retour en haut de page" className="footer-logo-link">
            <Image
              src="/brand/ETHICOM Globe Swoosh Logo White.png"
              alt="ETHICOM"
              width={240}
              height={64}
              className="footer-logo"
            />
          </a>
          <p className="footer-tagline">
            Cabinet d’expertise institutionnelle et organisationnelle. Nous accompagnons les institutions et les organisations vers la performance, l’impact et la durabilité.
          </p>
          <div className="footer-slogan-badge">
            <span className="footer-badge-dot" aria-hidden="true" />
            <span>L’éthique au service de la performance</span>
          </div>
        </div>

        {/* Column 1: Exploration */}
        <div className="footer-column">
          <h4 className="footer-col-title">LE CABINET</h4>
          <ul className="footer-links">
            <li><a href="#cabinet">Qui nous sommes</a></li>
            <li><a href="#expertises">Domaines d’intervention</a></li>
            <li><a href="#approche">Démarche méthodologique</a></li>
            <li><a href="#fondateur">Direction & Fondateur</a></li>
          </ul>
        </div>

        {/* Column 2: Interventions */}
        <div className="footer-column">
          <h4 className="footer-col-title">INTERVENTIONS</h4>
          <ul className="footer-links">
            <li><a href="#details-expertises">Conseil & gouvernance</a></li>
            <li><a href="#details-expertises">Stratégies & ingénierie sociale</a></li>
            <li><a href="#details-expertises">Études, diagnostics & audits</a></li>
            <li><a href="#formation-details">Formations & programmes</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Ressources */}
        <div className="footer-column">
          <h4 className="footer-col-title">ENGAGEMENT</h4>
          <ul className="footer-links">
            <li><a href="#ressources">Publications & références</a></li>
            <li><a href="#contact" className="footer-highlight-link">
              <span>Demande de services</span>
              <ArrowIcon diagonal size={14} />
            </a></li>
            <li><span className="footer-meta-text">Afrique & International</span></li>
            <li><span className="footer-meta-text">Confidentialité garantie</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom-left">
          <span>© {currentYear} ETHICOM. Tous droits réservés.</span>
          <span className="footer-bottom-sep" aria-hidden="true">·</span>
          <span>Cabinet d’expertise institutionnelle & organisationnelle</span>
        </div>

        <div className="footer-bottom-right">
          <a href="#accueil" className="back-to-top-btn" aria-label="Remonter en haut de page">
            <span>Retour en haut</span>
            <span className="back-to-top-arrow" aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
