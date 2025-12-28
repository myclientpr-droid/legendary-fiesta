import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs'
import Script from "next/script";

export const metadata = {
  title: 'Aurbina Scholars Hub - Making a Difference',
  description: 'Non-profit organization dedicated to creating positive change in our community.',
}

export default function RootLayout({ children }) {
  return (
  <ClerkProvider>
    <html lang="en">
      <head>
         <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-QGH2NVQ280"
      />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QGH2NVQ280');
      `}
    </Script>
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow mt-[3.3rem]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  </ClerkProvider>
  )
}