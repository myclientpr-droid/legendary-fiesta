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
  
  {/*monetag
  <Script src="https://quge5.com/88/tag.min.js" data-zone="202521" async data-cfasync="false" />
  */}
  <Script src="https://3nbf4.com/act/files/tag.min.js?z=10504786" data-cfasync="false" async/>
  
  <Script id="vignette" strategy="afterInteractive">
  {`(function(s){
      s.dataset.zone='10504807';
      s.src='https://gizokraijaw.net/vignette.min.js';
    })([document.documentElement, document.body]
      .filter(Boolean)
      .pop()
      .appendChild(document.createElement('script')));`}
</Script>

<Script id="tag-10504820" strategy="afterInteractive">
  {`
    (function (s) {
      s.dataset.zone = '10504820';
      s.src = 'https://nap5k.com/tag.min.js';
    })(
      [document.documentElement, document.body]
        .filter(Boolean)
        .pop()
        .appendChild(document.createElement('script'))
    );
  `}
</Script>
  
  
  {/*adsttera native banner*/}
  <Script async data-cfasync="false" src="https://pl28539685.effectivegatecpm.com/09d618d3a8b88d28db262ff3ab0bd4da/invoke.js"/>
  
      </head>
      <body>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow mt-[3.3rem]">
            {children}
          </main>
          {/* Adsterra / EffectiveGate CPM script */}
          <Script strategy='afterInteractive' src="https://pl28540256.effectivegatecpm.com/9a/b8/f8/9ab8f8bebf002506bc9d9ad5480f607d.js"/>
          <Footer />
        </div>
        
      </body>
    </html>
  )
}