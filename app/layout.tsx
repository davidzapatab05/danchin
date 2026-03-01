import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://danchin.vercel.app").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "Danchin - Fisioterapia y Bienestar | Recuperacion en Casa",
  description:
    "Especialistas en fisioterapia a domicilio, rehabilitacion fisica y masajes terapeuticos en Lima. Trato humano y resultados reales con el Lic. Daniel Chinguel.",
  keywords: [
    "fisioterapia",
    "rehabilitacion",
    "masajista",
    "lima",
    "domicilio",
    "terapia fisica",
    "dolor de espalda",
  ],
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
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    title: "Danchin - Fisioterapia y Bienestar",
    description: "Recupera tu movilidad sin salir de casa. Fisioterapia profesional y humana.",
    siteName: "Danchin Fisioterapia",
    images: [
      {
        url: "/images/logo.webp",
        width: 1024,
        height: 1024,
        alt: "Danchin Fisioterapia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danchin - Fisioterapia a Domicilio",
    description: "Tu bienestar en las mejores manos. Agenda tu sesion hoy.",
    images: ["/images/logo.webp"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Danchin",
  },
  verification: {
    google: "G1oKjRa4UD5EXuvruOJTJxoKUAqhijjc-j8ZJsgTE6s",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "dns-prefetch": "https://www.transparenttextures.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
