import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Clarioft Technologies | Business Systems & Digital Solutions",
    template: "%s | Clarioft Technologies",
  },
  description:
    "Clarioft Technologies designs and builds practical business software, intelligent workflows and digital solutions that help organisations operate smarter and grow.",
  applicationName: "Clarioft Technologies",
  icons: {
    icon: "/brand/clarioft-mark.svg",
    shortcut: "/brand/clarioft-mark.svg",
  },
  keywords: [
    "Clarioft Technologies",
    "business software",
    "ERP systems",
    "CRM solutions",
    "business automation",
    "custom software development",
    "digital transformation",
    "Kenya",
  ],
  openGraph: {
    title: "Clarioft Technologies | Technology built around your business",
    description:
      "Practical business systems, software solutions and intelligent automation.",
    siteName: "Clarioft Technologies",
    type: "website",
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
      </body>
    </html>
  );
}

