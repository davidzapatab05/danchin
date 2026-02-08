import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danchin - Fisioterapia & Bienestar | Recuperación en Casa",
  description: "Especialistas en fisioterapia a domicilio, rehabilitación física y masajes terapéuticos en Lima. Trato humano y resultados reales con el Lic. Daniel Chinguel.",
  keywords: ["fisioterapia", "rehabilitación", "masajista", "lima", "domicilio", "terapia fisica", "dolor de espalda"],
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://danchin.pe",
    title: "Danchin - Fisioterapia & Bienestar",
    description: "Recupera tu movilidad sin salir de casa. Fisioterapia profesional y humana.",
    siteName: "Danchin Fisioterapia",
    images: [
      {
        url: "/images/hero-og.jpg", // We should make sure this exists or use a generic one
        width: 1200,
        height: 630,
        alt: "Danchin Fisioterapia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danchin - Fisioterapia a Domicilio",
    description: "Tu bienestar en las mejores manos. Agenda tu sesión hoy.",
    images: ["/images/hero-og.jpg"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Danchin",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
