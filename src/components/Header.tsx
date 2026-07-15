"use client";

import { useState } from "react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Marques", href: "#marques" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070708]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-end px-4 sm:h-20 sm:px-8 lg:justify-between">
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/62 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="mailto:Contact@apexliner.ch" className="btn-primary">
            Demander un devis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-px w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#070708]/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-white/70 transition hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a href="mailto:Contact@apexliner.ch" className="btn-primary mt-3 justify-center">
              Demander un devis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
