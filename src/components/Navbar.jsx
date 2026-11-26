'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import {
  Heart, LayoutDashboard, LogOut, Menu, X,
  Home, LayoutGrid, GraduationCap, Newspaper, Users, HeartHandshake, Info, HelpCircle, Mail,
} from 'lucide-react'

const NAV_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Programs', href: '/programs', icon: LayoutGrid },
  { name: 'Academy', href: '/academy', icon: GraduationCap },
  { name: 'Updates', href: '/news', icon: Newspaper },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Get Involved', href: '/get-involved', icon: HeartHandshake },
  { name: 'About', href: '/about', icon: Info },
]

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Contact', href: '/contact', icon: Mail },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const isAdminUser = !!session?.user?.isAdmin

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const closeMenu = () => setIsMenuOpen(false)

  // Every bar item is shrink-0 + nowrap: labels can never wrap onto a second line
  const linkClass = (href) =>
    `inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold transition ${
      isActive(href)
        ? 'bg-white/15 text-white shadow-sm ring-1 ring-white/20'
        : 'text-slate-300 hover:bg-white/10 hover:text-white'
    }`

  const authLinkClass =
    'inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white'

  const mobileLinkClass = (href) =>
    `flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
      isActive(href)
        ? 'bg-white/15 text-white shadow-sm ring-1 ring-white/20'
        : 'text-slate-300 hover:bg-white/10 hover:text-white'
    }`

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-ink-800 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.8)]">
      {/* Brand-coloured hairline under the bar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"
      />

      <div className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex min-w-0 items-center gap-2.5 whitespace-nowrap" onClick={closeMenu}>
            <Image
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-white/25"
              src="/logo.jpg"
              width={40}
              height={40}
              alt="Aurbina Scholars Hub"
            />
            {/* Wordmark from sm up (phones get just the crest); truncates rather than pushing the actions off-screen */}
            <span className="hidden min-w-0 truncate whitespace-nowrap text-lg font-semibold tracking-tight text-white sm:block lg:text-base">
              <span className="inline">Aurbina Scholars Hub</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden shrink-0 items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {/* Icons appear from xl up so the bar stays roomy on laptops */}
                <link.icon className="hidden h-3.5 w-3.5 shrink-0 xl:block" aria-hidden="true" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden shrink-0 items-center gap-1.5 lg:flex">
            {status === 'authenticated' && isAdminUser && (
              <>
                <Link href="/admin" className={authLinkClass}>
                  <LayoutDashboard className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="shrink-0 rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  title="Sign out"
                  aria-label="Sign out"
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                </button>
              </>
            )}

            {status === 'unauthenticated' && (
              <>
                <Link href="/login" className={authLinkClass}>
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="shrink-0 whitespace-nowrap rounded-full border border-white/25 bg-white/10 px-2.5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
                >
                  Sign up
                </Link>
              </>
            )}

            <Link
              href="/donate"
              className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-red-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm shadow-red-600/25 transition hover:bg-red-700"
            >
              <Heart className="h-4 w-4 shrink-0" aria-hidden="true" />
              Donate
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              onClick={closeMenu}
              className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-red-600/25 transition hover:bg-red-700"
            >
              <Heart className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Donate
            </Link>
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="shrink-0 rounded-lg p-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {isMenuOpen && (
          <div className="border-t border-white/10 pt-3 pb-6 lg:hidden">
            <div className="space-y-1">
              {MOBILE_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={mobileLinkClass(link.href)}
                  onClick={closeMenu}
                >
                  <link.icon className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
              {status === 'authenticated' ? (
                <>
                  {isAdminUser && (
                    <Link
                      href="/admin"
                      onClick={closeMenu}
                      className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="w-full rounded-full border border-white/20 bg-white/5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                status === 'unauthenticated' && (
                  <>
                    <Link
                      href="/login"
                      onClick={closeMenu}
                      className="block rounded-full border border-white/20 bg-white/5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      onClick={closeMenu}
                      className="block rounded-full bg-primary-600 py-2.5 text-center text-sm font-semibold text-white shadow-sm shadow-primary-600/25 transition hover:bg-primary-700"
                    >
                      Create account
                    </Link>
                  </>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
