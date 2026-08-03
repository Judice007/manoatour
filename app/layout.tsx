import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoa Tour | Reserve seu passeio em Angra dos Reis",
  description: "Consulte passeios de barco, aluguel de embarcação e hospedagem para viver Angra dos Reis e Ilha Grande.",
  icons: {
    icon: "/manoa-profile.jpg",
    apple: "/manoa-profile.jpg",
  },
  openGraph: {
    title: "Manoa Tour | Passeios em Angra dos Reis",
    description: "Passeios de barco, aluguel de embarcação e hospedagem na Costa Verde.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Manoa Tour — passeios em Angra dos Reis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoa Tour | Passeios em Angra dos Reis",
    description: "Consulte seu próximo passeio por Angra e Ilha Grande.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
