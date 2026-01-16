import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css';
import Script from "next/script";

export const metadata = {
  title: 'Aurbina Scholars Hub - Making a Difference',
  description: 'Non-profit organization dedicated to creating positive change in our community.',
  openGraph: {
    title: "Aurbina Scholars Hub",
    description: "Aurbina Scholars Hub empowers learners and educators through accessible education, research initiatives, and community-based knowledge sharing.",
    url: "https://ashedui.vercel.app",
    siteName: "Aurbina Scholars Hub",
    images: [
      {
        url: "https://ashedui.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurbina Scholars Hub - Making a Difference",
      },
    ],
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="As_0-OvaL6rKKuLASGINga8iryZVNpmIPIppmQjC_ZQ" />
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
  
  {/*monetag*/}
  <Script src="https://quge5.com/88/tag.min.js" data-zone="202521" async data-cfasync="false" />
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
  )
}