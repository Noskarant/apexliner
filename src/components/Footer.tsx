import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 sm:py-10">
      <div className="section-shell space-y-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-white/45">
              Films solaires, covering & marquage publicitaire
            </p>
            <a href="mailto:Contact@apexliner.ch" className="mt-2 inline-flex text-sm font-semibold text-white/70 transition hover:text-white">
              Contact@apexliner.ch
            </a>
          </div>
          <p className="text-sm text-white/35">© {new Date().getFullYear()} APEX LINER. Tous droits réservés.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/35">
          <Link href="/mentions-legales" className="transition hover:text-white/70">
            Mentions légales
          </Link>
          <Link href="/politique-confidentialite" className="transition hover:text-white/70">
            Politique de confidentialité
          </Link>
          <Link href="/cgv" className="transition hover:text-white/70">
            Conditions générales
          </Link>
        </div>
      </div>
    </footer>
  );
}
