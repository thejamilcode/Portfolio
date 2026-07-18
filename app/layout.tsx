import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = "https://jamilahmed.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jamil Ahmed — Backend Developer (Django) & WordPress Expert",
    template: "%s | Jamil Ahmed",
  },
  description:
    "Jamil Ahmed is a backend developer specializing in Django and WordPress/WooCommerce, building fast, scalable websites and web applications that help businesses grow. Based in Sylhet, Bangladesh, available for freelance and remote work.",
  keywords: [
    "Jamil Ahmed",
    "Django developer",
    "WordPress developer",
    "WooCommerce expert",
    "backend developer Bangladesh",
    "freelance web developer",
    "full stack developer Sylhet",
  ],
  authors: [{ name: "Jamil Ahmed", url: siteUrl }],
  creator: "Jamil Ahmed",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jamil Ahmed — Backend Developer (Django) & WordPress Expert",
    description:
      "Building modern websites and scalable web applications that help businesses grow.",
    siteName: "Jamil Ahmed",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamil Ahmed — Backend Developer (Django) & WordPress Expert",
    description:
      "Building modern websites and scalable web applications that help businesses grow.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jamil Ahmed",
              jobTitle: "Backend Developer (Django) & WordPress Developer",
              url: siteUrl,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sylhet",
                addressCountry: "BD",
              },
              knowsAbout: [
                "Django",
                "Python",
                "WordPress",
                "WooCommerce",
                "PHP",
                "REST API",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
