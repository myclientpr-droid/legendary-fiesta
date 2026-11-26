import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import PageHeader from "@/components/PageHeader";
import { DEVELOPER, DEVELOPER_PATH } from "@/lib/config/developer";
import { ORGANIZATION, SITE_URL } from "@/lib/config/site";

const PAGE_URL = `${SITE_URL}${DEVELOPER_PATH}`;
const PERSON_ID = `${PAGE_URL}#person`;
const PHOTO = "/developer/ismail.png";

export const metadata = {
  title: "Developer - Mohammed Ismail | Aurbina Scholars Hub",
  description:
    "Mohammed Ismail is an independent full-stack web and Android developer in Bangladesh, and the developer behind the Aurbina Scholars Hub website.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Mohammed Ismail - Developer of Aurbina Scholars Hub",
    description:
      "Independent full-stack web and Android developer in Bangladesh, and the developer behind this site.",
    url: PAGE_URL,
    siteName: ORGANIZATION.name,
    type: "profile",
    images: [
      {
        url: "/developer/og.jpg",
        width: 1200,
        height: 630,
        alt: `${DEVELOPER.person.name}, ${DEVELOPER.person.jobTitle}`,
      },
    ],
  },
};

// ProfilePage + Person + breadcrumb, so the page is machine-readable as a person
// rather than as an organisation page. Mirrors the visible copy — nothing extra.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PAGE_URL}#page`,
    url: PAGE_URL,
    name: DEVELOPER.hero.title,
    description: metadata.description,
    isPartOf: { "@type": "WebSite", name: ORGANIZATION.name, url: SITE_URL },
    mainEntity: { "@id": PERSON_ID },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: DEVELOPER.person.name,
    jobTitle: DEVELOPER.person.jobTitle,
    description: DEVELOPER.intro.body[0],
    image: `${SITE_URL}${PHOTO}`,
    url: PAGE_URL,
    telephone: DEVELOPER.person.whatsapp,
    knowsAbout: DEVELOPER.person.knowsAbout,
    address: { "@type": "PostalAddress", addressCountry: DEVELOPER.person.countryCode },
    sameAs: [DEVELOPER.person.portfolio, DEVELOPER.person.facebook],
    creator: DEVELOPER.projects.items.map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Developer", item: PAGE_URL },
    ],
  },
];

const DeveloperPage = () => {
  const { hero, person, intro, focus, projects, principles, links, build } = DEVELOPER;
  const whatsappDigits = person.whatsapp.replace(/[^\d]/g, "");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader eyebrow={hero.eyebrow} title={hero.title} description={hero.description} />

      {/* Identity */}
      <section className="pb-10 md:pb-16">
        <div className="container-custom grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 shadow-glass">
              <Image
                src={PHOTO}
                alt={`${person.name}, ${person.jobTitle}`}
                width={710}
                height={710}
                priority
                sizes="(min-width: 768px) 33vw, 90vw"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <span className="badge">{intro.eyebrow}</span>
            <h2 className="mt-4 text-2xl text-slate-900 md:text-3xl">{intro.title}</h2>
            <div className="mt-5 space-y-4 text-slate-600">
              {intro.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="mt-8 text-lg font-semibold text-slate-900">What I build</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {person.knowsAbout.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full bg-primary-50 px-3 py-1.5 text-xs font-semibold text-primary-700 ring-1 ring-primary-100"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Currently focused on */}
      <section className="pb-10 md:pb-16">
        <div className="container-custom">
          <div className="glass p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              {focus.eyebrow}
            </p>
            <p className="mt-4 text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
              {focus.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding">
        <div className="container-custom">
          <span className="badge">{projects.eyebrow}</span>
          <h2 className="mt-4 text-2xl text-slate-900 md:text-3xl">{projects.title}</h2>
          <p className="mt-3 max-w-2xl text-slate-600">{projects.description}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {projects.items.map((project) => (
              <li key={project.name} className="card flex items-center gap-3 p-4">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                />
                <span className="font-semibold text-slate-900">{project.name}</span>
                {project.current && (
                  <span className="ml-auto shrink-0 rounded-full bg-primary-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-700 ring-1 ring-primary-100">
                    This site
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding">
        <div className="container-custom grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <span className="badge">{principles.eyebrow}</span>
            <h2 className="mt-4 text-2xl text-slate-900 md:text-3xl">{principles.title}</h2>
          </div>
          <div className="space-y-4 text-slate-600 md:col-span-7">
            {principles.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Connect — dark panel so the social tiles and the CTA read */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary-800 to-ink p-2 shadow-lift">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-28 h-72 w-72 rounded-full bg-primary-400/40 blur-[90px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-rose-500/25 blur-[90px]"
            />

            <div className="relative rounded-[1.65rem] border border-white/15 bg-white/10 px-6 py-10 text-white backdrop-blur-2xl sm:px-10">
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                    {links.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl text-white md:text-3xl">{links.title}</h2>
                  <p className="mt-3 leading-relaxed text-white/75">{links.description}</p>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    {build.label}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {build.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 md:col-start-8">
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full px-6 py-3 text-base"
                  >
                    View my portfolio
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>

                  <ul className="mt-4 flex gap-2">
                    <li>
                      <a
                        href={person.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on Facebook (opens in a new tab)`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                      >
                        <FaFacebookF size={16} aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://wa.me/${whatsappDigits}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat with ${person.name} on WhatsApp (opens in a new tab)`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
                      >
                        <FaWhatsapp size={18} aria-hidden="true" />
                      </a>
                    </li>
                  </ul>

                  <p className="mt-5 text-sm text-white/60">
                    WhatsApp{" "}
                    <a
                      href={`https://wa.me/${whatsappDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-white underline-offset-4 hover:underline"
                    >
                      {person.whatsapp}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    For ASH matters:{" "}
                    <a
                      href={`mailto:${ORGANIZATION.emails[0]}`}
                      className="font-semibold break-words text-white underline-offset-4 hover:underline"
                    >
                      {ORGANIZATION.emails[0]}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeveloperPage;
