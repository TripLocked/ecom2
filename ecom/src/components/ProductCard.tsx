import type { Produit } from "@/data/produits";

export default function ProductCard({ produit }: { produit: Produit }) {
  return (
    <div style={{
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      padding: "1rem",
      margin: "1rem",
      width: "250px",
      cursor: "pointer",
      transition: "transform 0.2s ease",
    }} onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h2 style={{ color: "#0070f3" }}>{produit.nom}</h2>
      <p>{produit.description}</p>
      <strong style={{ fontSize: "1.1rem" }}>{produit.prix.toFixed(2)} €</strong>
    </div>
  );
}
