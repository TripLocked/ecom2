import { produits } from "@/data/produits";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Produits() {
  return (
    <main>
      <h1>Nos Produits</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {produits.map((p) => (
          <Link key={p.id} href={`/produits/${p.id}`}>
            <a style={{ textDecoration: "none" }}>
              <ProductCard produit={p} />
            </a>
          </Link>
        ))}
      </div>
    </main>
  );
}
