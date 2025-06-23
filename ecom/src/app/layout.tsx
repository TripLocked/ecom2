import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // Ajout de l'import du Footer
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Une boutique en ligne simple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer /> {/* Utilisation du Footer importé */}
      </body>
    </html>
  );
}