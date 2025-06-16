import { produits } from "@/data/produits";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: { id: string };
}

export default function FicheProduit({ params }: Props) {
  const produit = produits.find(p => p.id === params.id);

  if (!produit) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative w-full h-80 bg-slate-100 rounded-xl overflow-hidden">
          {produit.image ? (
            <Image
              src={produit.image}
              alt={produit.nom}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl text-slate-400">
              📦
            </div>
          )}
        </div>

        {/* Détails */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{produit.nom}</h1>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">{produit.description}</p>
            {produit.promotion && (
              <span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                -{produit.promotion}% de réduction
              </span>
            )}
          </div>

          <div>
            <div className="text-2xl font-bold text-slate-800 mb-1">{produit.prix}€</div>
            {produit.prixOriginal && (
              <div className="text-sm text-slate-500 line-through">{produit.prixOriginal}€</div>
            )}
            <div className="mt-4">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
