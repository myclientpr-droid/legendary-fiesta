import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Heart, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillTikTok } from 'react-icons/ai'
import Share from "@/components/shared/Share";
import { OFFICES, ORGANIZATION, SOCIAL_LINKS } from "@/lib/config/site";

const SOCIAL_BUTTONS = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, Icon: Facebook, color: '#1877F2' },
  { label: 'X', href: SOCIAL_LINKS.x, Icon: FaSquareXTwitter, color: '#ffffff' },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, Icon: Instagram, color: '#E4405F' },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, Icon: Linkedin, color: '#0A66C2' },
  { label: 'TikTok', href: SOCIAL_LINKS.tiktok, Icon: AiFillTikTok, color: '#ffffff' },
]

const footerLinks = {
  Explore: [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Online Academy', href: '/academy' },
    { name: 'Team', href: '/team' },
    { name: 'Updates', href: '/news' },
  ],
  'Get Involved': [
    { name: 'Volunteer', href: '/get-involved' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-ink-800 to-ink-950 text-slate-300">
      <div className="container-custom py-12">
        <Share />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                className="h-12 w-12 rounded-full object-cover ring-white/10"
                src="/logo.jpg"
                width={40}
                height={40}
                alt="Aurbina Scholars Hub"
              />
              <div>
                <p className="text-base font-bold text-white">Aurbina Scholars Hub</p>
                <p className="text-xs text-slate-400">Education · Community · Opportunity</p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A youth-led non-profit making quality education and community support accessible to
              learners in Malaysia and Bangladesh.
            </p>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href={`mailto:${ORGANIZATION.emails[0]}`}
                className="flex items-center gap-2 text-slate-400 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {ORGANIZATION.emails[0]}
              </a>
              <a
                href={`tel:${ORGANIZATION.phone}`}
                className="flex items-center gap-2 text-slate-400 transition hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {ORGANIZATION.phone}
              </a>
            </div>

            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition hover:bg-red-500"
            >
              <Heart className="h-4 w-4" />
              Donate
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_BUTTONS.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Aurbina Scholars Hub on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
                >
                  <Icon size={18} color={color} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
                  {category}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-slate-400 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} {ORGANIZATION.name}. All rights reserved.</p>
          <div className="space-y-1 md:text-right">
            {OFFICES.map((office) => (
              <p key={office.country}>{office.lines.join(", ")}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
