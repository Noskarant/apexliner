import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo muted />
          <p className="mt-4 text-sm text-white/45">
            Films solaires, covering & marquage publicitaire
          </p>
          <a href="mailto:Contact@apexliner.ch" className="mt-2 inline-flex text-sm font-semibold text-white/70 transition hover:text-white">
            Contact@apexliner.ch
          </a>
        </div>
        <p className="text-sm text-white/35">© {new Date().getFullYear()} APEX LINER. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
