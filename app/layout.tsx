import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import ToasterContext from './context/ToastContext'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import siteMetadata from "@/components/Common/siteMetadata"
import CookieConsentBanner from '@/components/Common/CookieConsentBanner'

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  category: siteMetadata.category,
  keywords: siteMetadata.keywords,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          {/* {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics GA_MEASUREMENT_ID= {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null} */}
          <CookieConsentBanner />
        <main>
          <ToasterContext />
          <Header />
            {children}
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  )
}
