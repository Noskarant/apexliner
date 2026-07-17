import { Logo } from "@/components/Logo";
import { businessInfo, localAreaLabel } from "@/lib/local-seo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 sm:py-10">
      <div className="section-shell space-y-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-white/45">
              Films solaires, covering & marquage publicitaire à Bussigny.
            </p>
            <p className="mt-2 max-w-xl text-xs leading-5 text-white/35">
              Base principale : {businessInfo.locality}, canton de {businessInfo.region}. Zones proches : {localAreaLabel}.
            </p>
            <a href={`mailto:${businessInfo.email}`} className="mt-2 inline-flex text-sm font-semibold text-white/70 transition hover:text-white">
              {businessInfo.email}
            </a>
          </div>
          <p className="text-sm text-white/35">© {new Date().getFullYear()} APEX LINER. Tous droits réservés.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-white/35">
          <Link href="/zone-intervention-bussigny-lausanne" className="transition hover:text-white/70">
            Zone Bussigny-Lausanne
          </Link>
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
