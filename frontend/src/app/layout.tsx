import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const siteBaseUrl = siteUrl?.replace(/\/+$/, "");

const organizationJsonLd = siteBaseUrl
  ? {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Clarioft Technologies",
      url: siteBaseUrl,
      logo: `${siteBaseUrl}/brand/clarioft-mark.svg`,
      description:
        "Clarioft Technologies designs and builds practical business systems, custom software and intelligent workflows.",
    }
  : null;

export const metadata: Metadata = {
  ...(siteUrl
    ? {
        metadataBase: new URL(siteUrl),
      }
    : {}),
  title: {
    default: "Clarioft Technologies | Business Systems & Digital Solutions",
    template: "%s | Clarioft Technologies",
  },
  description:
    "Clarioft Technologies designs and builds practical business software, ERP and CRM systems, intelligent workflows and digital solutions for organisations in Kenya and beyond.",
  applicationName: "Clarioft Technologies",
  category: "technology",
  icons: {
    icon: "/brand/clarioft-mark.svg",
    shortcut: "/brand/clarioft-mark.svg",
  },
  keywords: [
    "Clarioft Technologies",
    "business software Kenya",
    "ERP systems Kenya",
    "CRM solutions",
    "school management systems",
    "healthcare management systems",
    "inventory management software",
    "business automation",
    "custom software development",
    "digital transformation",
  ],
  openGraph: {
    title: "Clarioft Technologies | Software built around your business",
    description:
      "Practical business systems, custom software and intelligent workflows designed around how organisations operate.",
    siteName: "Clarioft Technologies",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Clarioft Technologies — Business Systems and Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarioft Technologies | Business Systems & Software",
    description:
      "Practical business systems, custom software and intelligent workflows.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {organizationJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organizationJsonLd).replace(
                /</g,
                "\\u003c",
              ),
            }}
          />
        )}
      </body>
    </html>
  );
}
