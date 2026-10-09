import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request) {
  let body;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Données invalides." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Données invalides." }, { status: 400 });
  }
  if (clean(body.website, 200)) return NextResponse.json({ ok: true }); // Honeypot silencieux

  const name = clean(body.name, 110);
  const organization = clean(body.organization, 140);
  const email = clean(body.email, 180);
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 3000);
  const consent = body.consent === true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailPattern.test(email) || !message || message.length < 15 || !consent) {
    return NextResponse.json({ error: "Veuillez renseigner les champs requis et vérifier votre adresse e-mail." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ETHICOM_CONTACT_EMAIL;
  const from = process.env.ETHICOM_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "L’envoi en ligne n’est pas encore configuré. Vous pouvez copier votre demande pour la transmettre par un autre canal." }, { status: 503 });
  }

  const payload = {
    from,
    to: [to],
    reply_to: email,
    subject: `[ETHICOM] ${subject || "Demande de services"}`,
    text: `Nouvelle demande ETHICOM\n\nNom : ${name}\nOrganisation : ${organization || "Non renseignée"}\nE-mail : ${email}\nObjet : ${subject || "Non renseigné"}\n\n${message}`
  };
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload), cache: "no-store"
    });
    if (!response.ok) return NextResponse.json({ error: "Votre demande n’a pas pu être envoyée. Veuillez réessayer plus tard." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Le service est temporairement indisponible. Veuillez réessayer." }, { status: 502 });
  }
}
