import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EQUINOX 2025 | CIE, MLR Institute of Technology, Hyderabad",
  description:
    "Discover EQUINOX 2025, the premier 3-day entrepreneurship summit organized by the Centre for Innovation and Entrepreneurship (CIE), MLRIT Hyderabad.",
  keywords: [
    "EQUINOX",
    "EQUINOX 2025",
    "MLRIT",
    "MLR Institute of Technology",
    "Hyderabad",
    "Centre for Innovation and Entrepreneurship",
    "CIE",
    "entrepreneurship event",
    "startup pitch",
    "business simulation",
  ],
  authors: [{ name: "CIE, MLRIT" }],
  creator: "CIE, MLRIT",
  publisher: "CIE, MLRIT",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cie.mlrit.ac.in/equinox-2025",
    siteName: "EQUINOX 2025",
    title: "EQUINOX 2025 | CIE, MLRIT",
    description:
      "Join the 3-day entrepreneurship summit at MLR Institute of Technology. Pitch to investors, collaborate, and compete in 11 major sub-events.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EQUINOX 2025 | CIE, MLRIT",
    description: "Discover the premier 3-day entrepreneurship summit at MLR Institute of Technology.",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#050A14" />
        <meta name="msapplication-TileColor" content="#050A14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Structured Data for Event */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "EQUINOX 2025",
              description: "A 3-day entrepreneurship summit organized by the Centre for Innovation and Entrepreneurship, MLRIT",
              startDate: "2025-10-24T09:00:00+05:30",
              endDate: "2025-10-26T17:00:00+05:30",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "MLR Institute of Technology Campus",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Laxman Reddy Avenue, Dundigal",
                  addressLocality: "Hyderabad",
                  postalCode: "500043",
                  addressRegion: "Telangana",
                  addressCountry: "IN",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Centre for Innovation and Entrepreneurship (CIE), MLRIT",
                url: "https://cie.mlrit.ac.in",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
