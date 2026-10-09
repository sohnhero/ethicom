import { Manrope, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-title",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ETHICOM — Expertise institutionnelle & organisationnelle",
    template: "%s | ETHICOM",
  },
  description:
    "ETHICOM accompagne les institutions et organisations dans la gouvernance, la stratégie, les études, les diagnostics et le renforcement des capacités. L’éthique au service de la performance.",
  applicationName: "ETHICOM",
  keywords: [
    "ETHICOM",
    "expertise institutionnelle",
    "gouvernance",
    "conseil organisationnel",
    "ingénierie sociale",
    "audit",
    "renforcement de capacités",
    "stratégie",
    "Dr Djibril Safi SECK",
  ],
  authors: [{ name: "ETHICOM" }],
  creator: "ETHICOM",
  openGraph: {
    title: "ETHICOM — L’éthique au service de la performance",
    description:
      "Conseil stratégique, diagnostics institutionnels, ingénierie sociale et renforcement de capacités au service des institutions et organisations.",
    type: "website",
    locale: "fr_FR",
    siteName: "ETHICOM",
    url: siteUrl,
    images: [
      {
        url: "/brand/open-graph.png",
        width: 1200,
        height: 630,
        alt: "ETHICOM — Expertise institutionnelle & organisationnelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ETHICOM — Expertise institutionnelle & organisationnelle",
    description: "L’éthique au service de la performance.",
    images: ["/brand/open-graph.png"],
  },
  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F739F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
