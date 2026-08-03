import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manoa Tour | Passeios em Angra dos Reis",
  description: "Passeios e aluguel de barco, roteiros pela Costa Verde e hospedagem em Angra dos Reis.",
  icons: {
    icon: "/manoa-profile.jpg",
    apple: "/manoa-profile.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
