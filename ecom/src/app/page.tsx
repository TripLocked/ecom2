import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur Ma Boutique</h1>
      <p>Découvrez nos produits uniques et modernes.</p>
      <Link
        href="/produits"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
          display: "inline-block",
          marginTop: "1rem",
        }}
      >
        Voir les produits
      </Link>
    </main>
  );
}
