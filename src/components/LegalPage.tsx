import Link from "next/link";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: {
    title: string;
    content: string[];
  }[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden py-28">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="section-shell relative max-w-4xl">
          <Link href="/" className="text-sm font-semibold text-white/45 transition hover:text-white">
            Retour à l&apos;accueil
          </Link>
          <p className="mt-12 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
            APEX LINER
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
            {intro}
          </p>

          <div className="mt-12 space-y-5">
            {sections.map((section) => (
              <article key={section.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
                <h2 className="font-display text-xl font-bold tracking-[-0.03em] text-white">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-white/58">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
