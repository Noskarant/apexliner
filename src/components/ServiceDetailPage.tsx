import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import type { ServicePage } from "@/lib/service-pages";

type Props = { service: ServicePage };

export function ServiceDetailPage({ service }: Props) {
  const related = service.relatedSlugs;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] text-white">
      <section className="section-shell pt-32 sm:pt-40">
        <Link href="/services" className="text-sm font-semibold text-white/55 transition hover:text-white">← Tous les services</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">Expertise APEX LINER</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl">{service.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{service.intro}</p>
            <Link href="/contact" className="btn-primary mt-8">Demander un devis</Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.35rem] border border-white/10 bg-black sm:rounded-[2rem]">
            <Image src={assetPath(service.image)} alt={service.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover opacity-85" />
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Une solution adaptée à votre support</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => <p key={benefit} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-white/75">{benefit}</p>)}
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Types de supports</h2>
          <ul className="mt-7 space-y-3 text-white/65">{service.supports.map((support) => <li key={support} className="border-b border-white/10 pb-3">{support}</li>)}</ul>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Méthode</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Comment se déroule la prestation</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => <article key={step.title} className="border-t border-white/20 pt-4"><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">0{index + 1}</p><h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-24">
        <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Questions fréquentes</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {service.faq.map((item) => <details key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-3 text-sm leading-6 text-white/60">{item.answer}</p></details>)}
        </div>
      </section>

      <section className="section-shell border-t border-white/10 py-16 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">À étudier ensemble</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Parlons de votre projet</h2></div>
          <Link href="/contact" className="btn-primary">Demander un devis</Link>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/60">
          {related.map((slug) => <Link key={slug} href={`/services/${slug}`} className="transition hover:text-white">Voir aussi : {slug.replaceAll("-", " ")}</Link>)}
        </div>
      </section>
    </main>
  );
}
