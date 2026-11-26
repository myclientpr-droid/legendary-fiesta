import Link from 'next/link'
import { ArrowRight, Heart } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-700 via-primary-800 to-ink p-2 shadow-lift">
          {/* Aurora glows behind the frosted panel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 -right-16 h-72 w-72 rounded-full bg-primary-400/40 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-rose-500/25 blur-[90px]"
          />

          <div className="relative rounded-[1.65rem] border border-white/15 bg-white/10 px-6 py-14 text-center text-white backdrop-blur-2xl sm:px-12">
            <div className="mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 uppercase backdrop-blur">
                <Heart className="h-3.5 w-3.5" />
                Support our mission
              </span>

              <h2 className="mt-6 mb-4 text-white">Join Us in Making a Difference</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Every contribution — a donation, an hour of your time, or a shared post — helps a
                learner keep learning.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/donate" className="btn-donate w-full px-7 py-3 text-base sm:w-auto">
                  <Heart className="h-5 w-5" />
                  Donate Now
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
                >
                  Volunteer Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 text-sm text-white/60">
                Prefer to talk first?{' '}
                <Link
                  href="/contact"
                  className="font-medium text-white underline-offset-4 hover:underline"
                >
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
