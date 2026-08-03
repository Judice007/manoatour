import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoa Tour | Reserve seu passeio em Angra dos Reis",
  description: "Consulte passeios compartilhados ou privativos em Angra dos Reis e receba dicas de parceiros para ficar na região.",
  icons: {
    icon: "/manoa-profile.jpg",
    apple: "/manoa-profile.jpg",
  },
  openGraph: {
    title: "Manoa Tour | Passeios em Angra dos Reis",
    description: "Passeios compartilhados ou privativos em Angra dos Reis e Ilha Grande.",
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
