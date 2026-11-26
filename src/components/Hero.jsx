import Link from 'next/link'
import { ArrowRight, BookOpen, HandHeart, Heart, Users } from 'lucide-react'

const PILLARS = [
  { icon: BookOpen, title: 'Education', text: 'Inclusive classes and learning materials for every age.' },
  { icon: HandHeart, title: 'Empowerment', text: 'Skills, mentorship and confidence to rebuild a future.' },
  { icon: Users, title: 'Community', text: 'Safe spaces created together with local partners.' },
]

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Subtle grid + aurora glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at 50% 0%, black 35%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, black 35%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary-500/30 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-rose-500/10 blur-[120px]"
      />

      <div className="container-custom relative py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-slate-300 uppercase backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Youth-led non-profit · Founded 2024
            </span>

            <h1 className="mt-6 leading-[1.08] tracking-tight text-white">
              Rebuilding Lives Through
              <span className="block text-primary-300">Education, Dignity, and Hope</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              A youth-led, non-profit organization supporting refugees from all backgrounds by
              creating inclusive and safe learning spaces. Through education, empowerment, and
              community-driven initiatives, we help rebuild confidence, resilience, and pathways to
              a better future.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="btn-donate py-3 text-base"
              >
                <Heart className="h-4 w-4" />
                Support Our Mission
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Learn Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Focus panel */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary-500/25 via-transparent to-sky-500/10 blur-2xl" />
            <div className="glass-dark relative rounded-3xl p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                What we do
              </p>

              <ul className="mt-6 space-y-5">
                {PILLARS.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/20 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5 text-sm">
                <span className="text-slate-400">Malaysia · Bangladesh</span>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-1 font-medium text-white transition hover:text-primary-300"
                >
                  View programs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
