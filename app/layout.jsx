// app/layout.jsx
import Script from 'next/script';

import './styles/globals.scss';   // ← add this at the top

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContents from './components/FloatingContents';


export const metadata = {
  title: 'TITLE',                 // default title
  description: 'DESCRIPTION',     // default description
  metadataBase: new URL('https://ivhub.com'), // change to your domain
  alternates: { canonical: 'https://ivhub.com' },
  openGraph: {
    title: 'TITLE',
    description: 'DESCRIPTION',
    url: 'https://ivhub.com',
    images: ['/og.png'],          // put og.png in /public
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TITLE',
    description: 'DESCRIPTION',
    images: ['/og.png']
  },
  icons: { icon: '/favicon.png' }, // /public/favicon.png
};

export default function RootLayout({ children }) {
  const GA_ID = 'G-G12RJM7459';     // your GA id
  const GTM_ID = 'GTM-M2P9DFG';     // your GTM id

  return (
    <html lang="en">
      <head>
        {/* Elfsight (loads after hydration) */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />

        {/* Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Optional: site-wide JSON-LD (LocalBusiness). Move page-specific JSON-LD to each page instead */}
        <Script id="schema-localbusiness" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "IV Wellness Lounge",
            "image": "https://ivhub.com/logo.png",
            "url": "https://ivhub.com",
            "telephone": "+97180048482",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Marble Walk, DIFC",
              "addressLocality": "Dubai",
              "addressRegion": "DU",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "955"
            }
          })}
        </Script>
      </head>

      <body>
        {/* GTM noscript (as in your current <body> section) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Header />
        <FloatingContents className="floating-wrap" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
