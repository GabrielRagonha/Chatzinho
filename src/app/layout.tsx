import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chatzinho | Conversas Privadas",
  description:
    "Crie salas exclusivas que se autodestroem após o uso. Comunique-se com segurança, sem deixar rastros.",
  keywords: ["chat privado", "sala de chat segura", "chatzinho", "nextjs"],
  authors: [{ name: "Gabriel Ragonha" }],
  openGraph: {
    title: "Chatzinho",
    description: "Crie sua sala e deixe que a conversa se apague sozinha.",
    type: "website",
    locale: "pt_BR",
    siteName: "Chatzinho",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
