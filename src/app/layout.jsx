import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs'
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  title: 'Aurbina Scholars Hub - Making a Difference',
  description: 'Non-profit organization dedicated to creating positive change in our community.',
}

export default function RootLayout({ children }) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow mt-[3.3rem]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-B4F3FMW431" strategy="afterInteractive" />
    </html>
  </ClerkProvider>
  )
}