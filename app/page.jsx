"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import {
  ArrowIcon,
  PlusIcon,
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  GlobeIcon,
  SparklesIcon,
} from "@/components/Icons";
import {
  brand,
  expertises,
  formationModules,
  formationAteliers,
} from "@/lib/content";

const expertiseContent = [
  {
    id: "conseil",
    label: "Conseil & accompagnement",
    title: "Des organisations plus fortes.",
    body: "Renforcer la gouvernance, accompagner le changement et ancrer durablement la performance institutionnelle.",
    style: "service-card--dark",
    visual: null,
    tags: ["Gouvernance", "Changement", "Performance"],
  },
  {
    id: "strategies",
    label: "Stratégies & documents",
    title: "Une vision qui devient action.",
    body: "Des orientations et des outils opérationnels pensés pour vos enjeux et vos parties prenantes.",
    style: "service-card--lime",
    visual: "/photos/strategie-documents.webp",
    tags: ["Plans sectoriels", "Ingénierie sociale", "Redevabilité"],
  },
  {
    id: "etudes",
    label: "Études, diagnostics & audits",
    title: "Des décisions mieux éclairées.",
    body: "Observer, comprendre, évaluer les réalités pour concevoir des réponses institutionnelles adaptées.",
    style: "service-card--image",
    visual: "/photos/diagnostic-institutionnel.webp",
    tags: ["Diagnostics 360°", "Audits spécialisés", "Impact"],
  },
  {
    id: "formation",
    label: "Formations & capacités",
    title: "Le savoir au service du progrès.",
    body: "Développer les compétences des cadres, agents et responsables grâce à des parcours ciblés.",
    style: "service-card--light",
    visual: "/photos/atelier-strategie.webp",
    tags: ["8 Modules", "Ateliers pratiques", "Sur-mesure"],
  },
];

const pillarDetails = [
  {
    title: "Performance",
    desc: "Optimisation des processus et efficacité des politiques organisationnelles.",
  },
  {
    title: "Impact",
    desc: "Mesure concrète des résultats et transformation sociale mesurable.",
  },
  {
    title: "Durabilité",
    desc: "Pérennisation des acquis, capitalisation des savoirs et mémoire stratégique.",
  },
];

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState("conseil");

  return (
    <>
      <Header />
      <main id="contenu">
        {/* ================= HERO SECTION ================= */}
        <section className="hero-shell" id="accueil" aria-labelledby="hero-title">
          <div className="container-wide hero-grid">
            {/* Visual Panel */}
            <div className="hero-photo-panel">
              <Image
                src="/photos/reunion-strategique.webp"
                alt="Illustration d'une réunion de travail stratégique entre professionnels"
                fill
                className="cover-image hero-main-img"
                sizes="(max-width: 840px) 100vw, 49vw"
                priority
              />
              <div className="hero-photo-overlay" />

              <div className="hero-photo-caption">
                <span className="caption-dot" aria-hidden="true" />
                <span>CONSEIL · ACCOMPAGNEMENT · TRANSFORMATION</span>
              </div>

              <div className="hero-photo-plaque">
                <div className="plaque-header">
                  <span className="plaque-star" aria-hidden="true">✳</span>
                  <span className="plaque-small">NOTRE RAISON D’ÊTRE</span>
                </div>
                <strong>
                  Penser des solutions.<br />
                  Faire progresser les organisations.
                </strong>
                <span className="plaque-sub">Accompagnement de haut niveau en Afrique & à l’international</span>
              </div>
            </div>

            {/* Copy Panel */}
            <div className="hero-copy-panel">
              <div className="hero-topline hero-animate-badge">
                <span className="eyebrow-pill">
                  <span className="pill-dot" aria-hidden="true" />
                  CABINET D’EXPERTISE INSTITUTIONNELLE
                </span>
              </div>

              <h1 id="hero-title" className="hero-animate-title">
                Des institutions<br />
                <span>plus performantes.</span><br />
                Un impact durable.
              </h1>

              <p className="hero-intro hero-animate-intro">
                Nous accompagnons les institutions et les organisations dans la définition et la mise en œuvre de solutions stratégiques et opérationnelles adaptées à leurs réalités.
              </p>

              <div className="hero-actions hero-animate-actions">
                <a className="btn btn-lime" href="#cabinet">
                  <span>Découvrir le cabinet</span>
                  <ArrowIcon size={17} />
                </a>
                <a className="btn btn-outline" href="#expertises">
                  <span>Nos expertises</span>
                  <ArrowIcon diagonal size={17} />
                </a>
              </div>

              <div className="hero-bottom-line hero-animate-stats">
                <div className="hero-stat">
                  <strong>
                    <Counter value={4} />
                  </strong>
                  <span>
                    domaines<br />
                    d’expertise
                  </span>
                </div>
                <div className="hero-stat-sep" aria-hidden="true" />
                <div className="hero-stat">
                  <strong>
                    <Counter value={3} />
                  </strong>
                  <span>
                    piliers<br />
                    fondamentaux
                  </span>
                </div>
                <div className="hero-signature-wrap">
                  <span className="hero-signature">{brand.slogan}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AUDIENCE STRIP ================= */}
        <div className="audience-strip" role="region" aria-label="Partenaires et bénéficiaires">
          <div className="container audience-inner">
            <div className="audience-tag">
              <SparklesIcon size={14} />
              <span>UNE EXPERTISE AU SERVICE DE</span>
            </div>
            <div className="audience-items">
              <span className="audience-item">Institutions publiques & Ministères</span>
              <i aria-hidden="true" />
              <span className="audience-item">Organisations privées & Entreprises</span>
              <i aria-hidden="true" />
              <span className="audience-item">Programmes de développement & Bailleurs</span>
              <i aria-hidden="true" />
              <span className="audience-item">Acteurs académiques & Recherche</span>
            </div>
          </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="about-section section" id="cabinet" aria-labelledby="about-title">
          <div className="container about-grid">
            <Reveal className="about-images" variant="scale">
              <div className="about-image-primary">
                <Image
                  src="/photos/cabinet-conseil.webp"
                  alt="Conseillers experts d'ETHICOM en séance de travail et consultation institutionnelle à Dakar"
                  fill
                  className="cover-image"
                  sizes="(max-width: 840px) 100vw, 46vw"
                />
                <div className="about-image-overlay" />
              </div>
              <div className="about-mini-card">
                <div className="about-mini-header">
                  <span className="mini-star" aria-hidden="true">✳</span>
                  <span>UNE CONVICTION FONDATRICE</span>
                </div>
                <strong>L’éthique au service de la performance.</strong>
                <p className="mini-card-text">
                  Allier rigueur déontologique, haute technicité et résultats durables.
                </p>
              </div>
            </Reveal>

            <div className="about-copy">
              <Reveal variant="blur">
                <span className="eyebrow">
                  <span className="eyebrow-mark" aria-hidden="true" /> QUI NOUS SOMMES
                </span>
                <h2 id="about-title">
                  Un partenaire engagé aux côtés des <span>institutions et des organisations.</span>
                </h2>
                <p className="about-lead">
                  ETHICOM est un cabinet d’expertise institutionnelle et organisationnelle qui construit des réponses concrètes aux défis de gouvernance, de stratégie et de transformation.
                </p>
                <p className="body-muted">
                  Notre démarche articule conseil stratégique, production analytique et transmission continue de savoirs. Nous nous appuyons sur une équipe de haut niveau et un réseau pluridisciplinaire d’experts et de partenaires spécialisés.
                </p>
              </Reveal>

              <Reveal delay={120} variant="up">
                <div className="values-inline">
                  {brand.pillars.map((value, idx) => (
                    <div className="value-inline" key={value}>
                      <div className="value-header">
                        <span className="value-bullet-dot" aria-hidden="true" />
                        <strong className="value-title">{value}</strong>
                      </div>
                      <p className="value-desc">{pillarDetails[idx]?.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="about-actions">
                  <a href="#approche" className="btn btn-dark">
                    <span>Notre démarche méthodologique</span>
                    <ArrowIcon diagonal size={16} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= EXPERTISES SECTION ================= */}
        <section
          className="section services-section"
          id="expertises"
          aria-labelledby="services-title"
        >
          <div className="container">
            <Reveal className="section-heading services-heading" variant="blur">
              <div className="heading-group">
                <span className="eyebrow">
                  <span className="eyebrow-mark" aria-hidden="true" /> NOS SAVOIR-FAIRE
                </span>
                <h2 id="services-title">
                  Une expertise complète<br />
                  pour vos <span>enjeux stratégiques.</span>
                </h2>
              </div>
              <p>
                Quatre domaines complémentaires pour accompagner les institutions et les organisations à chaque étape clé de leur évolution.
              </p>
            </Reveal>

            <div className="services-grid">
              {expertiseContent.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 100}
                  variant="up"
                  className={`service-card ${item.style}`}
                >
                  {item.visual && (
                    <Image
                      src={item.visual}
                      alt=""
                      fill
                      className="service-photo"
                      sizes="(max-width: 700px) 100vw, 26vw"
                    />
                  )}
                  <div className="service-card-scrim" />
                  <div className="service-card-content">
                    <div className="service-header-row">
                      <span className="service-domain-tag">
                        <span className="service-domain-dot" aria-hidden="true" />
                        <span className="service-domain-label">{item.label}</span>
                      </span>
                    </div>

                    <div className="service-card-middle">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>

                    <div className="service-card-footer">
                      <div className="service-tags-wrap">
                        {item.tags.map((tag) => (
                          <span key={tag} className="service-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`#detail-${expertises[i].id}`}
                        className="round-arrow"
                        aria-label={`Découvrir en détail : ${item.label}`}
                      >
                        <ArrowIcon diagonal size={18} />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="services-foot" variant="up" delay={120}>
              <div className="services-foot-info">
                <span className="foot-bullet" aria-hidden="true" />
                <span>Des réponses sur mesure et adaptées à chaque contexte organisationnel.</span>
              </div>
              <a href="#details-expertises" className="inline-link">
                <span>Explorer toutes nos interventions</span>
                <ArrowIcon size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* ================= METHOD SECTION ================= */}
        <section className="method-section section" id="approche" aria-labelledby="method-title">
          <div className="container">
            <Reveal className="method-heading" variant="blur">
              <div>
                <span className="eyebrow eyebrow-light">
                  <span className="eyebrow-mark" aria-hidden="true" /> NOTRE APPROCHE
                </span>
                <h2 id="method-title">
                  Conjuguer la réflexion<br />
                  et <span>l’efficacité de l’action.</span>
                </h2>
              </div>
              <p>
                Un accompagnement structuré en trois temps pour partir de vos réalités terrain, identifier les leviers pertinents et soutenir des progrès vérifiables.
              </p>
            </Reveal>

            <div className="method-grid">
              <Reveal className="method-item" delay={0} variant="up">
                <div className="method-top">
                  <span className="method-n">PHASE I • COMPRENDRE</span>
                  <span className="method-phase-badge">Diagnostic</span>
                </div>
                <h3>Analyser les enjeux.</h3>
                <p>
                  Études sectorielles, diagnostics territoriaux et audits approfondis pour identifier les besoins réels et éclairer la prise de décision.
                </p>
                <div className="method-deliverable">
                  <CheckIcon size={14} className="method-check" />
                  <span>Livrables : Diagnostics 360°, cartographies & audits</span>
                </div>
              </Reveal>

              <Reveal className="method-item" delay={100} variant="up">
                <div className="method-top">
                  <span className="method-n">PHASE II • STRUCTURER</span>
                  <span className="method-phase-badge">Cadrage</span>
                </div>
                <h3>Construire la réponse.</h3>
                <p>
                  Élaboration de stratégies d’action, plans de communication, ingénierie sociale, cadres de gouvernance et feuilles de route opérationnelles.
                </p>
                <div className="method-deliverable">
                  <CheckIcon size={14} className="method-check" />
                  <span>Livrables : Documents cadres & plans d’action sectoriels</span>
                </div>
              </Reveal>

              <Reveal className="method-item" delay={200} variant="up">
                <div className="method-top">
                  <span className="method-n">PHASE III • ACCOMPAGNER</span>
                  <span className="method-phase-badge">Pérennisation</span>
                </div>
                <h3>Renforcer l’impact.</h3>
                <p>
                  Conseil, coaching de dirigeants, suivi méthodologique et renforcement continu des capacités pour inscrire la transformation dans la durée.
                </p>
                <div className="method-deliverable">
                  <CheckIcon size={14} className="method-check" />
                  <span>Livrables : Sessions de formation & transfert d’outils</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= DETAILS SECTION ================= */}
        <section
          className="section detail-section"
          id="details-expertises"
          aria-labelledby="detail-title"
        >
          <div className="container detail-grid">
            <Reveal className="detail-intro" variant="left">
              <span className="eyebrow">
                <span className="eyebrow-mark" aria-hidden="true" /> DOMAINES D’INTERVENTION
              </span>
              <h2 id="detail-title">
                Des solutions précises pour des <span>besoins concrets.</span>
              </h2>
              <p>
                Découvrez le détail de nos prestations. Chaque mission est configurée sur mesure selon le contexte institutionnel et les objectifs fixés.
              </p>
              <div className="detail-cta-box">
                <span className="cta-box-lead">Vous avez un projet en cours d’élaboration ?</span>
                <p className="cta-box-sub">Nos experts analysent vos enjeux institutionnels et configurent une réponse opérationnelle sur mesure.</p>
                <a className="inline-link" href="#contact">
                  <span>Présentez-nous votre besoin</span>
                  <ArrowIcon size={17} />
                </a>
              </div>
            </Reveal>

            <Reveal className="detail-list" variant="right" delay={80}>
              {expertises.map((exp, idx) => {
                const isOpen = activeDomain === exp.id;
                return (
                  <details
                    id={`detail-${exp.id}`}
                    key={exp.id}
                    className={`detail-accordion ${isOpen ? "detail-accordion--open" : ""}`}
                    open={true}
                  >
                    <summary
                      className="detail-summary"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDomain(isOpen ? null : exp.id);
                      }}
                      aria-expanded={isOpen}
                    >
                      <div className="detail-summary-left">
                        <div className="detail-meta-row">
                          <span className="detail-scope-badge">
                            <span className="detail-scope-dot" aria-hidden="true" />
                            {exp.services.length} prestations d’expertise
                          </span>
                        </div>
                        <strong className="detail-title">{exp.eyebrow}</strong>
                        <p className="detail-teaser">{exp.description}</p>
                      </div>
                      <div className="detail-toggle-wrap">
                        <span className="detail-toggle-label">{isOpen ? "Réduire" : "Explorer"}</span>
                        <span className={`detail-plus ${isOpen ? "detail-plus--open" : ""}`} aria-hidden="true">
                          <PlusIcon size={18} />
                        </span>
                      </div>
                    </summary>

                    <div className={`detail-accordion-collapse ${isOpen ? "is-expanded" : ""}`}>
                      <div className="detail-accordion-body">
                        <div className="detail-body-header">
                          <span className="detail-headline-tag">OBJECTIFS & LIVRABLES CLÉS</span>
                          <h4 className="detail-headline">{exp.title}</h4>
                        </div>
                        <div className="accordion-services-grid">
                          {exp.services.map((service) => (
                            <div className="service-item-card" key={service}>
                              <div className="service-item-header">
                                <span className="service-bullet-check" aria-hidden="true">✓</span>
                              </div>
                              <p className="service-item-text">{service}</p>
                            </div>
                          ))}
                        </div>
                        {exp.id === "formation" && (
                          <div className="accordion-action">
                            <a href="#formation-details" className="inline-link">
                              <span>Découvrir nos modules de formation</span>
                              <ArrowIcon size={16} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </details>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* ================= TRAINING SECTION ================= */}
        <section
          className="training-section section"
          id="formation-details"
          aria-labelledby="training-title"
        >
          <div className="container training-grid">
            <Reveal className="training-image" variant="scale">
              <Image
                src="/photos/formation-capacites.webp"
                alt="Illustration d'un séminaire de renforcement de capacités"
                fill
                className="cover-image"
                sizes="(max-width: 840px) 100vw, 47vw"
              />
              <div className="training-image-overlay" />
              <div className="training-image-caption">
                <span className="training-cap-tag">TRANSMETTRE POUR TRANSFORMER</span>
                <strong>Des compétences qui font la différence.</strong>
                <p className="training-cap-sub">
                  Programmes destinés aux cadres dirigeants, agents publics et décideurs d’organisations.
                </p>
              </div>
            </Reveal>

            <div className="training-copy">
              <Reveal variant="blur">
                <div className="training-copy-head">
                  <span className="eyebrow">
                    <span className="eyebrow-mark" aria-hidden="true" /> FORMATION & CAPACITÉS
                  </span>
                  <h2 id="training-title">
                    Investir dans les savoirs, <span>renforcer les organisations.</span>
                  </h2>
                  <p className="training-lead">
                    Formations spécialisées, ateliers pratiques, séminaires institutionnels et sessions sur mesure conçus pour doter vos équipes des compétences stratégiques les plus demandées.
                  </p>
                </div>
              </Reveal>

              <Reveal className="module-panel" variant="up" delay={80}>
                <div className="module-panel-head">
                  <div className="module-panel-title-group">
                    <span className="module-panel-icon" aria-hidden="true">✦</span>
                    <h3>Curriculum & Modules certifiants</h3>
                  </div>
                  <span className="module-badge">PROGRAMMES CERTIFIANTS</span>
                </div>
                <ul className="modules-list">
                  {formationModules.map((item) => (
                    <li key={item} className="module-item">
                      <span className="module-bullet-dot" aria-hidden="true" />
                      <span className="module-name">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="workshop-tags">
                  <div className="workshop-label">
                    <span className="workshop-dot-pulse" aria-hidden="true" />
                    <span className="workshop-title">Ateliers immersifs :</span>
                  </div>
                  <div className="workshop-pills-row">
                    {formationAteliers.map((item) => (
                      <span key={item} className="workshop-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal className="training-actions" variant="up" delay={140}>
                <a href="#contact" className="btn btn-dark">
                  <span>Parlons de vos besoins en formation</span>
                  <ArrowIcon diagonal size={17} />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= FOUNDER SECTION ================= */}
        <section className="founder-section section" id="fondateur" aria-labelledby="founder-title">
          <div className="container founder-layout">
            <Reveal className="founder-card" variant="scale">
              <div className="founder-image-wrap">
                <Image
                  src="/photos/djibril-safi-seck.webp"
                  alt="Dr Djibril Safi SECK - Fondateur et Directeur d'ETHICOM"
                  fill
                  className="cover-image"
                  sizes="(max-width: 840px) 100vw, 45vw"
                  priority={false}
                />
                <div className="founder-image-overlay" />
              </div>
              <div className="founder-caption">
                <span className="founder-role-tag">FONDATEUR & DIRECTEUR D’ETHICOM</span>
                <strong className="founder-name">{brand.founderName}</strong>
              </div>
            </Reveal>

            <div className="founder-copy">
              <Reveal variant="right" delay={80}>
                <span className="eyebrow eyebrow-light">
                  <span className="eyebrow-mark" aria-hidden="true" /> LE FONDATEUR
                </span>
                <h2 id="founder-title">
                  Une expérience reconnue au service de <span>la transformation.</span>
                </h2>
                <div className="founder-bio-text">
                  <p>{brand.founderBio}</p>
                </div>
                <div className="founder-actions">
                  <a className="btn btn-cream" href="#contact">
                    <span>Échanger avec le cabinet</span>
                    <ArrowIcon diagonal size={16} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= RESOURCES SECTION ================= */}
        <section className="resources-section section" id="ressources" aria-labelledby="resources-title">
          <div className="container">
            <Reveal className="section-heading resource-heading" variant="blur">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-mark" aria-hidden="true" /> POUR ALLER PLUS LOIN
                </span>
                <h2 id="resources-title">
                  Ressources & <span>références.</span>
                </h2>
              </div>
              <p>
                Des espaces dédiés aux publications, références et partenaires du cabinet, à enrichir avec les contenus officiellement validés.
              </p>
            </Reveal>

            <div className="resource-grid">
              <Reveal className="resource-card" variant="up" delay={0}>
                <div className="resource-card-top">
                  <span className="resource-category">PUBLICATIONS & ANALYSES</span>
                  <span className="resource-status-badge">Veille & Méthode</span>
                </div>
                <h3>Analyses & ressources</h3>
                <p>
                  Les documents, notes d’orientation et publications méthodologiques du cabinet seront présentés ici dès leur parution officielle.
                </p>
                <span className="resource-foot">
                  <span>CONTENUS À VENIR</span>
                  <ArrowIcon diagonal size={15} />
                </span>
              </Reveal>

              <Reveal className="resource-card" variant="up" delay={120}>
                <div className="resource-card-top">
                  <span className="resource-category">RÉFÉRENCES & PARTENARIATS</span>
                  <span className="resource-status-badge">Partenariats</span>
                </div>
                <h3>Références & partenaires</h3>
                <p>
                  Les expériences institutionnelles, collaborations avec les bailleurs et partenariats académiques pourront être ajoutés une fois les pièces confirmées.
                </p>
                <span className="resource-foot">
                  <span>À COMPLÉTER</span>
                  <ArrowIcon diagonal size={15} />
                </span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="contact-section section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <Reveal className="contact-content" variant="left">
              <span className="eyebrow eyebrow-light">
                <span className="eyebrow-mark" aria-hidden="true" /> TRAVAILLONS ENSEMBLE
              </span>
              <h2 id="contact-title">
                Votre prochain défi mérite <span>un partenaire à l’écoute.</span>
              </h2>
              <p className="contact-intro">
                Un projet de transformation, une étude sectorielle, une démarche stratégique ou un besoin en formation ? Décrivez-nous vos attentes pour initier un échange avec notre équipe.
              </p>

              <div className="contact-reassurance-cards">
                <div className="reassurance-card">
                  <div className="reassurance-icon">
                    <ClockIcon size={18} />
                  </div>
                  <div className="reassurance-copy">
                    <strong>Réactivité garantie</strong>
                    <span>Analyse préalable et réponse sous 48h ouvrées.</span>
                  </div>
                </div>

                <div className="reassurance-card">
                  <div className="reassurance-icon">
                    <ShieldCheckIcon size={18} />
                  </div>
                  <div className="reassurance-copy">
                    <strong>Confidentialité stricte</strong>
                    <span>Respect scrupuleux du secret professionnel.</span>
                  </div>
                </div>

                <div className="reassurance-card">
                  <div className="reassurance-icon">
                    <GlobeIcon size={18} />
                  </div>
                  <div className="reassurance-copy">
                    <strong>Périmètre élargi</strong>
                    <span>Missions déployables en Afrique et à l’international.</span>
                  </div>
                </div>
              </div>

              <div className="contact-promise">
                <span className="contact-promise-star" aria-hidden="true">✳</span>
                <span className="contact-promise-text">{brand.slogan}</span>
              </div>
            </Reveal>

            <Reveal className="contact-form-wrapper" variant="right" delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
