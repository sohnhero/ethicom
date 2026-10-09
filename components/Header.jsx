"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowIcon } from "./Icons";

const links = [
  { href: "#cabinet", title: "Le cabinet" },
  { href: "#expertises", title: "Expertises" },
  { href: "#approche", title: "Notre approche" },
  { href: "#formation-details", title: "Formations" },
  { href: "#fondateur", title: "Le fondateur" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll state for sticky frosted glass effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Determine active section
      const sectionIds = ["cabinet", "expertises", "approche", "formation-details", "fondateur", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${id}`);
          return;
        }
      }
      if (window.scrollY < 200) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility & body scroll lock for mobile menu
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const handler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu principal
      </a>

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className={`container-wide nav-pill ${scrolled ? "nav-pill--scrolled" : ""}`}>
          <a
            href="#accueil"
            className="logo-link"
            onClick={() => setOpen(false)}
            aria-label="ETHICOM, retour à l’accueil"
          >
            <Image
              src="/brand/ETHICOM Globe Swoosh Logo.png"
              alt="ETHICOM"
              width={260}
              height={68}
              priority
              className="logo-img"
            />
          </a>

          <nav
            aria-label="Navigation principale"
            id="navigation-principale"
            className={`main-nav ${open ? "main-nav--open" : ""}`}
          >
            <div className="mobile-nav-header">
              <span className="mobile-nav-tag">MENU INSTITUTIONNEL</span>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
              >
                ✕
              </button>
            </div>

            <div className="nav-links-wrap">
              {links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  className={`nav-item ${activeSection === link.href ? "nav-item--active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <span className="nav-text">{link.title}</span>
                  {activeSection === link.href && <span className="nav-active-dot" aria-hidden="true" />}
                </a>
              ))}
            </div>

            <div className="mobile-nav-footer">
              <a
                className="mobile-contact-link btn btn-lime"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                <span>Demande de services</span>
                <ArrowIcon size={16} diagonal />
              </a>
              <p className="mobile-nav-slogan">L’éthique au service de la performance</p>
            </div>
          </nav>

          <div className="nav-right">
            <a href="#contact" className="nav-cta">
              <span>Nous contacter</span>
              <ArrowIcon diagonal size={15} />
            </a>

            <button
              type="button"
              className={`menu-toggle ${open ? "is-open" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-controls="navigation-principale"
              aria-expanded={open}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <div
        className={`mobile-backdrop ${open ? "mobile-backdrop--visible" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
