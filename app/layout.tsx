import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://manoatour.vercel.app"),
  title: "Manoa Tour | Reserve seu passeio em Angra dos Reis",
  description: "Passeios compartilhados ou privativos em Angra dos Reis, com valores e agendamento direto pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/manoa-profile.jpg",
    apple: "/manoa-profile.jpg",
  },
  openGraph: {
    title: "Manoa Tour | Passeios em Angra dos Reis",
    description: "Passeios compartilhados ou privativos, com valores e agendamento direto pelo WhatsApp.",
    url: "/",
    siteName: "Manoa Tour",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Manoa Tour — passeios em Angra dos Reis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoa Tour | Passeios em Angra dos Reis",
    description: "Valores e agendamento do seu passeio direto pelo WhatsApp.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
