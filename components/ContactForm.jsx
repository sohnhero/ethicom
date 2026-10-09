"use client";

import { useState } from "react";
import {
  ArrowIcon,
  CheckIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  UserIcon,
  BuildingIcon,
  MailIcon,
  CopyIcon,
} from "./Icons";

const DOMAINS = [
  { id: "Conseil et accompagnement", label: "Conseil & accompagnement" },
  { id: "Documents stratégiques", label: "Documents stratégiques" },
  { id: "Études, diagnostics et audits", label: "Études, diagnostics & audits" },
  { id: "Formations et renforcement des capacités", label: "Formations & capacités" },
  { id: "Autre demande", label: "Autre besoin" },
];

const initial = {
  name: "",
  organization: "",
  email: "",
  subject: "",
  message: "",
  website: "", // honeypot
  consent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: "idle", text: "", details: "" });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [touched, setTouched] = useState({});

  const update = (name, value) => {
    setForm((s) => ({ ...s, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", text: "", details: "" });
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isMessageValid = form.message.trim().length >= 15;

  const copy = async () => {
    const text = [
      "SYNTHÈSE DE DEMANDE — CABINET ETHICOM",
      "========================================",
      `Demandeur    : ${form.name || "Non renseigné"}`,
      `Organisation : ${form.organization || "Non renseignée"}`,
      `E-mail       : ${form.email || "Non renseigné"}`,
      `Domaine      : ${form.subject || "Non précisé"}`,
      "",
      "DESCRIPTION DU BESOIN :",
      form.message || "(Aucun message rédigé)",
      "========================================",
      "Transmis via ethicom.org",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setStatus({
        type: "success",
        text: "Votre synthèse a été copiée dans le presse-papier avec succès.",
        details: "Vous pouvez désormais la coller directement dans votre messagerie habituelle.",
      });
      setTimeout(() => setCopied(false), 4500);
    } catch {
      setStatus({
        type: "error",
        text: "La copie automatique est momentanément inaccessible.",
        details: "Veuillez sélectionner manuellement le texte pour le copier.",
      });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (!form.name.trim()) {
      setStatus({
        type: "error",
        text: "Veuillez renseigner votre nom complet.",
      });
      return;
    }

    if (!isEmailValid) {
      setStatus({
        type: "error",
        text: "Veuillez saisir une adresse e-mail professionnelle valide.",
      });
      return;
    }

    if (!isMessageValid) {
      setStatus({
        type: "error",
        text: "Veuillez décrire votre projet (au moins 15 caractères).",
      });
      return;
    }

    if (!form.consent) {
      setStatus({
        type: "error",
        text: "Veuillez accepter le traitement de vos informations pour initier l'échange.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", text: "", details: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        // If 503 Service Unavailable (Resend API key not configured yet)
        if (response.status === 503) {
          setStatus({
            type: "config",
            text: "L’envoi direct par le serveur nécessite la configuration des clés de messagerie du cabinet.",
            details:
              "Pour faciliter votre démarche sans attendre, cliquez sur « Copier ma demande » ci-dessous pour nous la transmettre par e-mail direct.",
          });
          return;
        }
        throw new Error(result.error || "Erreur lors de l’envoi de votre demande.");
      }

      setStatus({
        type: "success",
        text: "Votre demande a bien été transmise à l’équipe du cabinet ETHICOM.",
        details: "Un consultant senior prendra contact avec vous dans un délai de 48 heures ouvrées.",
      });
      setForm(initial);
      setTouched({});
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message || "Le service de messagerie est temporairement indisponible.",
        details: "Vous pouvez copier votre demande pour l'envoyer directement par votre messagerie.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form
        className="contact-form"
        onSubmit={submit}
        aria-label="Formulaire de demande d'expertise institutionnelle"
        noValidate
      >
        <div className="form-head">
          <div className="form-head-title">
            <span className="form-tag">DOSSIER DE DEMANDE</span>
            <h3 className="form-title">Décrivez votre projet</h3>
          </div>
          <div className="form-badge-pill">
            <span className="dot-pulse" aria-hidden="true" />
            <span>Réponse sous 48h</span>
          </div>
        </div>

        {/* Domaine selector pills */}
        <div className="form-field-group">
          <label className="field-label" id="label-domaine">
            Domaine d’intervention privilégié
            <span className="field-optional">(Optionnel)</span>
          </label>
          <div className="domain-pills" role="radiogroup" aria-labelledby="label-domaine">
            {DOMAINS.map((domain) => {
              const isSelected = form.subject === domain.id;
              return (
                <button
                  type="button"
                  key={domain.id}
                  className={`domain-pill ${isSelected ? "domain-pill--selected" : ""}`}
                  onClick={() => update("subject", isSelected ? "" : domain.id)}
                  role="radio"
                  aria-checked={isSelected}
                >
                  {isSelected && <CheckIcon size={13} className="domain-pill-check" />}
                  <span>{domain.label}</span>
                </button>
              );
            })}
          </div>

          {/* Hidden accessible fallback select for keyboard/form sync */}
          <select
            className="sr-only"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            tabIndex={-1}
            aria-hidden="true"
          >
            <option value="">Choisir un domaine</option>
            {DOMAINS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Row 1: Name and Email side-by-side */}
        <div className="form-row">
          <div className="form-field">
            <label className="field-label" htmlFor="contact-name">
              Votre nom complet <span className="field-required">*</span>
            </label>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <UserIcon size={15} />
              </span>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                autoComplete="name"
                placeholder="Dr / M. / Mme Prénom Nom"
                required
                maxLength={110}
                className={`text-input ${
                  touched.name && !form.name.trim() ? "input--invalid" : ""
                }`}
              />
            </div>
            {touched.name && !form.name.trim() && (
              <span className="input-error-msg">Veuillez renseigner votre nom.</span>
            )}
          </div>

          <div className="form-field">
            <label className="field-label" htmlFor="contact-email">
              Adresse e-mail professionnelle <span className="field-required">*</span>
            </label>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <MailIcon size={15} />
              </span>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                autoComplete="email"
                placeholder="contact@organisation.org"
                required
                maxLength={180}
                className={`text-input ${
                  touched.email && !isEmailValid ? "input--invalid" : ""
                } ${isEmailValid ? "input--valid" : ""}`}
              />
              {isEmailValid && (
                <span className="input-valid-indicator" title="Adresse e-mail valide">
                  <CheckIcon size={13} />
                </span>
              )}
            </div>
            {touched.email && !isEmailValid && (
              <span className="input-error-msg">Veuillez saisir une adresse e-mail valide.</span>
            )}
          </div>
        </div>

        {/* Row 2: Organization */}
        <div className="form-field">
          <label className="field-label" htmlFor="contact-org">
            Votre organisation / institution
            <span className="field-optional">(Optionnel)</span>
          </label>
          <div className="input-wrap">
            <span className="input-icon" aria-hidden="true">
              <BuildingIcon size={15} />
            </span>
            <input
              id="contact-org"
              name="organization"
              value={form.organization}
              onChange={(e) => update("organization", e.target.value)}
              autoComplete="organization"
              placeholder="Ministère, Entreprise, ONG, Université..."
              maxLength={140}
              className="text-input"
            />
          </div>
        </div>

        {/* Row 3: Message Textarea */}
        <div className="form-field">
          <div className="field-label-row">
            <label className="field-label" htmlFor="contact-message">
              Présentation de votre besoin <span className="field-required">*</span>
            </label>
            <span className="char-counter">
              {form.message.length} / 3000 car. (min. 15)
            </span>
          </div>
          <div className="textarea-wrap">
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => handleBlur("message")}
              rows={3}
              required
              minLength={15}
              maxLength={3000}
              placeholder="Décrivez le contexte de votre institution, vos objectifs stratégiques, le calendrier envisagé ou vos attentes prioritaires..."
              className={`text-area ${
                touched.message && !isMessageValid ? "input--invalid" : ""
              }`}
            />
          </div>
          {touched.message && !isMessageValid && (
            <span className="input-error-msg">
              Veuillez fournir au moins 15 caractères de description.
            </span>
          )}
        </div>

        {/* Honeypot field for anti-spam */}
        <div className="form-honeypot" aria-hidden="true">
          <label htmlFor="website-trap">Site web</label>
          <input
            id="website-trap"
            tabIndex={-1}
            autoComplete="off"
            name="website"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
          />
        </div>

        {/* Consent checkbox */}
        <label className="form-consent">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            required
            className="checkbox-custom"
          />
          <span className="consent-text">
            J’accepte que les données transmises soient traitées par le cabinet ETHICOM dans le cadre strict de l’analyse de cette demande institutionnelle.
            <span className="field-required"> *</span>
          </span>
        </label>

        {/* Action buttons */}
        <div className="form-actions">
          <button
            type="submit"
            className="btn btn-lime submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="btn-spinner" aria-hidden="true" />
                <span>Transmission en cours…</span>
              </>
            ) : (
              <>
                <span>Transmettre ma demande</span>
                <ArrowIcon diagonal size={17} />
              </>
            )}
          </button>

          <button
            type="button"
            className={`copy-link-btn ${copied ? "copy-link-btn--copied" : ""}`}
            onClick={copy}
            title="Copier la synthèse de votre saisie"
          >
            {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
            <span>{copied ? "Synthèse copiée !" : "Copier ma demande"}</span>
          </button>
        </div>

        {/* Status feedback alerts */}
        {status.type !== "idle" && (
          <div
            className={`form-alert form-alert--${status.type}`}
            aria-live="polite"
            role="status"
          >
            <div className="alert-icon">
              {status.type === "success" && <CheckCircleIcon size={20} />}
              {status.type === "error" && <AlertCircleIcon size={20} />}
              {status.type === "config" && <AlertCircleIcon size={20} />}
            </div>
            <div className="alert-body">
              <strong>{status.text}</strong>
              {status.details && <p>{status.details}</p>}
            </div>
          </div>
        )}

        <div className="form-footer-guarantee">
          <span className="guarantee-shield">🔒</span>
          <span>
            Échanges soumis au secret professionnel et à la stricte confidentialité institutionnelle.
          </span>
        </div>
      </form>
    </div>
  );
}
