import { produits } from "@/data/produits";

interface Props {
  params: { id: string };
}

export default function Produit({ params }: Props) {
const id = parseInt(params.id, 10);
const produit = produits.find((p) => p.id === id);


  if (!produit) {
    return <main><p>Produit non trouvé.</p></main>;
  }

  return (
    <main style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1 style={{ color: "#0070f3" }}>{produit.nom}</h1>
      <p>{produit.description}</p>
      <strong style={{ fontSize: "1.3rem" }}>{produit.prix.toFixed(2)} €</strong>
    </main>
  );
}
