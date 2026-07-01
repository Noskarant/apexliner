"use client";

import { FormEvent, useState } from "react";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Demande de devis - ${name || "APEX LINER"}`);
    const body = encodeURIComponent(
      [`Nom : ${name}`, `Email : ${email}`, "", "Message :", message].join("\n"),
    );
    window.location.href = `mailto:Contact@apexliner.ch?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
            Parlons de votre projet
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
            Pour une demande de devis ou une première prise de contact, contactez APEX LINER par email.
          </p>
          <a href="mailto:Contact@apexliner.ch" className="mt-8 inline-flex text-xl font-bold text-white underline decoration-white/20 underline-offset-8 transition hover:decoration-white">
            Contact@apexliner.ch
          </a>
        </div>

        <form onSubmit={prepareEmail} className="reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/30 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-white/70">
              Nom
              <input value={name} onChange={(event) => setName(event.target.value)} className="field" placeholder="Votre nom" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-white/70">
              Email
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="field" placeholder="votre@email.ch" type="email" />
            </label>
          </div>
          <label className="mt-4 block space-y-2 text-sm font-semibold text-white/70">
            Message
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} className="field min-h-40 resize-none" placeholder="Décrivez rapidement le projet, le lieu, le type de surface ou le besoin." />
          </label>
          <button type="submit" className="btn-primary mt-5 w-full justify-center">
            Préparer l’email
          </button>
        </form>
      </div>
    </section>
  );
}
