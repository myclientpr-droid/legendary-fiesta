'use client'
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { ORGANIZATION } from "@/lib/config/site";

const VALUES = [
  {
    title: 'Dignity and Respect',
    value: "We uphold the dignity of every individual and treat all people with respect, regardless of background, ethnicity, gender, religion, or legal status.",
  },
  {
    title: 'Inclusivity and Equality',
    value: "We believe in equal access to education and opportunities for all refugees and marginalized communities, without discrimination.",
  },
  {
    title: 'Education as Empowerment',
    value: "We view education as a powerful tool for rebuilding lives, strengthening resilience, and creating long-term change.",
  },
  {
    title: 'Child Protection and Safeguarding',
    value: "The safety and well-being of children and youth are our top priorities. We maintain zero tolerance for abuse, exploitation, or harm.",
  },
  {
    title: 'Community-Led Action',
    value: "As a youth-led initiative, we believe sustainable impact comes from community-driven solutions and meaningful participation.",
  },
  {
    title: 'Integrity and Accountability',
    value: "We act with honesty, transparency, and responsibility in all our programs, partnerships, and use of resources.",
  },
  {
    title: 'Collaboration and Solidarity',
    value: "We value partnerships and collective action, working with communities, organizations, and allies to amplify impact.",
  },
];

const COLLABORATORS = [
  { name: 'Youth Empowerment Support (YES)', logo: '/yes-logo.png' },
  { name: 'Myanmar Book Hub (MBH)', logo: '/mbh-logo.jpg', href: 'https://mbsi.vercel.app' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="About Us"
        description="A youth-led, non-profit organization rebuilding lives disrupted by displacement through education, empowerment and community support."
      />

      <div className="section-padding">
        <div className="container-custom">

          {/* Mission */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="mb-5 text-slate-900">Our Mission</h2>
              <div className="space-y-4 leading-relaxed text-slate-600">
                <p>
                  Aurbina Scholars Hub is a youth-led, non-profit organization dedicated to
                  supporting refugees from all backgrounds and ethnic communities. Our mission is
                  to rebuild lives disrupted by displacement through education, empowerment, and
                  community support.
                </p>
                <p>
                  We work to create inclusive and safe learning spaces where refugee children and
                  youth can access quality education, develop essential life skills, and regain hope
                  for a better future. By addressing gaps in opportunity, protection, and access to
                  resources, we aim to equip individuals with the knowledge and confidence needed to
                  become self-reliant and active contributors to society.
                </p>
                <p>
                  Our mission is grounded in dignity, equality, and human rights. We believe that
                  every refugee—regardless of origin, gender, or legal status—deserves the
                  opportunity to learn, grow, and lead. Through education, awareness, and
                  community-driven initiatives, we strive to rebuild not only academic pathways, but
                  also resilience, identity, and purpose.
                </p>
                <p>
                  Founded in 2024, we have grown from a small local initiative to an international
                  organization impacting thousands of lives annually.
                </p>
              </div>
            </div>

            <div className="glass p-2.5">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src="/ash-banner.png"
                  alt="Aurbina Scholars Hub community banner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-20">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="badge">What guides us</span>
              <h2 className="mt-4 mb-3 text-slate-900">Our Values</h2>
              <p className="text-slate-600">
                At Aurbina Scholars Hub, our work is guided by the following core values.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VALUES.map((item, idx) => (
                <div key={item.title} className="card p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborate */}
          <div className="glass relative mt-20 overflow-hidden p-8 text-center sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-400/25 blur-3xl"
            />
            <div className="relative">
              <span className="badge">Partnerships</span>
              <h2 className="mt-4 mb-4 text-slate-900">Collaborate with Us</h2>
              <p className="mx-auto mb-8 max-w-3xl text-slate-600">
                We believe real and lasting change happens through collaboration. Aurbina Scholars
                Hub partners with NGOs, educators, youth groups, community leaders, and
                mission-aligned organizations to expand access to education, protection, and
                empowerment. Through partnerships, we co-create impactful programs, exchange
                knowledge, and reach underserved refugee children and communities. Together, we can
                build sustainable solutions that create long-term impact.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => {
                    const subject = encodeURIComponent("Organization Collaboration Proposal");
                    const body = encodeURIComponent(
                      `Hello Aurbina Scholars Hub Team,\n\nWe represent an organization interested in collaborating with Aurbina Scholars Hub on education, protection, or community initiatives.\n\nPlease let us know the next steps to explore a potential partnership.\n\nOrganization Name:\nFocus Area:\nContact Person:\n\nThank you.`
                    );
                    window.location.href = `mailto:${ORGANIZATION.emails[0]}?subject=${subject}&body=${body}`;
                  }}
                  className="btn-primary"
                >
                  Partner as an Organization
                </button>

                <button
                  onClick={() => {
                    const subject = encodeURIComponent("Individual Collaboration Interest");
                    const body = encodeURIComponent(
                      `Hello Aurbina Scholars Hub Team,\n\nI am interested in collaborating with Aurbina Scholars Hub as an individual contributor.\n\nSkills / Expertise:\nAvailability:\nAreas of Interest:\n\nThank you.`
                    );
                    window.location.href = `mailto:${ORGANIZATION.emails[0]}?subject=${subject}&body=${body}`;
                  }}
                  className="btn-secondary"
                >
                  Join as a Collaborator
                </button>
              </div>
            </div>
          </div>

          {/* Collaborators */}
          <div className="mt-20 text-center">
            <span className="badge">Our network</span>
            <h2 className="mt-4 mb-4 text-slate-900">Our Collaborators</h2>
            <p className="mx-auto mb-10 max-w-3xl text-slate-600">
              We are grateful to work alongside dedicated individuals, organizations, and community
              groups who believe in the power of education and collective action. Their support,
              expertise, and commitment help us expand our reach and create lasting impact for
              learners and communities.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {COLLABORATORS.map((partner) => (
                <div key={partner.name} className="card p-6">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-white/70 ring-1 ring-white/60">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-slate-900 transition hover:text-primary-700"
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <span className="text-base font-semibold text-slate-900">{partner.name}</span>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-10 text-slate-600">
              Interested in becoming a collaborator?{' '}
              <span className="font-semibold text-primary-700">
                Let&rsquo;s work together to create impact.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
