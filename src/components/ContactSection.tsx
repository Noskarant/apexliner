"use client";

import { FormEvent, useState } from "react";
import { businessInfo, localAreaLabel } from "@/lib/local-seo";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const subject = encodeURIComponent(`Demande de devis APEX LINER - ${cleanName || "nouveau projet"}`);
    const body = encodeURIComponent(
      [
        `Nom : ${cleanName}`,
        `Email : ${cleanEmail}`,
        "",
        "Message :",
        cleanMessage,
      ].join("\n"),
    );
    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-[2.35rem] font-extrabold leading-[1] tracking-[-0.055em] text-white sm:mt-4 sm:text-5xl sm:leading-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            APEX LINER est basée à Bussigny, dans le canton de Vaud. Pour une demande de devis à Bussigny, Crissier,
            Renens, Ecublens ou Lausanne, contactez l’entreprise par email.
          </p>
          <div className="mt-5 space-y-2 text-sm leading-6 text-white/50">
            <p>Localisation principale : {businessInfo.locality}, canton de {businessInfo.region}.</p>
            <p>Zones proches : {localAreaLabel}.</p>
          </div>
          <a href={`mailto:${businessInfo.email}`} className="mt-6 inline-flex break-all text-lg font-bold text-white underline decoration-white/20 underline-offset-8 transition hover:decoration-white sm:mt-8 sm:text-xl">
            {businessInfo.email}
          </a>
        </div>

        <form onSubmit={prepareEmail} className="reveal rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-white/70">
              Nom
              <input name="name" value={name} onChange={(event) => setName(event.target.value)} className="field" placeholder="Votre nom" required />
            </label>
            <label className="space-y-2 text-sm font-semibold text-white/70">
              Email
              <input name="email" value={email} onChange={(event) => setEmail(event.target.value)} className="field" placeholder="votre@email.ch" type="email" required />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm font-semibold text-white/70">
            Message
            <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} className="field min-h-40 resize-none" placeholder="Décrivez le projet, le lieu, le type de surface ou le besoin." required />
          </label>
          <button type="submit" className="btn-primary mt-5 w-full justify-center">
            Préparer l’email
          </button>
          <p className="mt-3 text-center text-xs leading-relaxed text-white/38">
            Le bouton ouvre votre application mail avec le message prérempli.
          </p>
        </form>
      </div>
    </section>
  );
}
