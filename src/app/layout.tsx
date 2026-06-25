import type { Metadata } from "next";;
import { Playfair_Display, DM_Sans } from "next/font/google";;
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sylive Beauty Salon | Premium Hair & Beauty Services in Makindye, Kampala",
  description:
    "Sylive Beauty Salon offers professional hair dressing, braiding, styling, and beauty services on Salaama Road, Makindye, Kampala. Open 7 days a week, 9AM-9PM. Book your appointment today!",
  keywords: [
    "beauty salon",
    "hair salon",
    "Makindye",
    "Kampala",
    "Uganda",
    "hair dressing",
    "braiding",
    "beauty services",
    "Salaama Road",
  ],
  openGraph: {
    title: "Sylive Beauty Salon – Makindye, Kampala",
    description:
      "Professional hair and beauty services in the heart of Makindye. Open 7 days a week.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.NodeNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
