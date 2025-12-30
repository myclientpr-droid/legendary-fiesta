import Link from 'next/link'
import Image from "next/image";
import {Linkedin, Instagram, Facebook } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Share from "@/components/shared/Share";


const Footer = () => {
  const footerLinks = {
    'About Us': [
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Team', href: '/about#team' },
      { name: 'Partners', href: '/about#partners' },
    ],
    'Programs': [
      { name: 'Education', href: '/programs#education' },
      { name: 'Health', href: '/programs#health' },
      { name: 'Community', href: '/programs#community' },
    ],
    'Legal': [
      { name: 'Volunteer', href: '/get-involved' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  }

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-8">
          <Share/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image className="h-10 w-10 bg-primary-500 rounded-full object-cover border-3 "
              src='/logo.jpg' width={30} height={30} alt='logo'/>
              <span className="ml-3 text-xl font-bold">ASH</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making a positive impact in communities worldwide since 2024.
            </p>
            <div className="flex space-x-4">
              {[{link:'https://www.facebook.com/share/1RSk1oMjo9/', icon:Facebook, color: "#1877F2"}, {link:'https://x.com/mrofik262', icon:FaSquareXTwitter, color: "white"}, {link:'https://www.instagram.com/scholarshuboffical?igsh=MWR3YTY1MjY4bHB5ZQ==', icon:Instagram, color: "#E4405F"}, {link:'https://www.linkedin.com/in/scholarshubofficiala87a94383', icon:Linkedin, color: "#0A66C2"}, {link:'https://www.tiktok.com/@scholarshuboffical?_r=1&_t=ZS-92LIXwQpfgl', icon:AiFillTikTok, color: "white"}].map((social, idx) => {
                const Icon = social.icon;
                return <a
                  key={idx}
                  href={social.link}
                  className="text-gray-400 hover:text-white transition duration-300" target="_blank">
                  <span className="sr-only">{social.link}</span>
                  <div className="rounded-lg hover:text-zinc-50"><Icon size={30} color={social.color}/></div>
                </a>
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

          
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aurbina Scholars Hub. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Jln tengah gombak setapak 53100 Kuala Lumpur Malaysia
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer