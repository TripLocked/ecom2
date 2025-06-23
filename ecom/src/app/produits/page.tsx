"use client";

import { produits } from "@/data/produits";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import ProductCard from "@/components/ProductCard";

export default function ListeProduits() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState("all");
  const searchTerm = searchParams.get("search")?.trim() || "";

  const fuse = useMemo(() => {
    return new Fuse(produits, {
      keys: ["nom", "description"],
      threshold: 0.4,
      ignoreLocation: true,
      useExtendedSearch: true,
    });
  }, []);

  const filteredProduits = useMemo(() => {
    let result = produits;

    if (category !== "all") {
      result = result.filter((p) =>
        (category === "new" && p.isNew) ||
        (category === "popular" && p.isPopular) ||
        (category === "sale" && p.promotion)
      );
    }

    if (searchTerm) {
      result = fuse.search(searchTerm).map((r) => r.item);
    }

    return result;
  }, [searchTerm, category, fuse]);

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Tous nos produits</h1>
          <p className="text-slate-600 mt-2">Explorez notre catalogue exclusif</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <input
              type="text"
              placeholder="Rechercher un produit..."
              defaultValue={searchTerm}
              className="w-full sm:w-2/3 px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-800 placeholder:text-neutral-800"
              onChange={(e) => {
                const value = e.target.value;
                const url = new URL(window.location.href);
                if (value.trim()) {
                  url.searchParams.set("search", value);
                } else {
                  url.searchParams.delete("search");
                }
                window.history.replaceState(null, "", url.toString());
              }}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-neutral-800 placeholder:text-neutral-800"
            >
              <option value="all" className="text-neutral-800">Toutes les catégories</option>
              <option value="new" className="text-neutral-800">Nouveautés</option>
              <option value="popular" className="text-neutral-800">Populaires</option>
              <option value="sale" className="text-neutral-800">En promotion</option>
            </select>
          </div>
        </div>

        {filteredProduits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProduits.map((produit) => (
              <ProductCard key={produit.id} produit={produit} />
            ))}
          </div>
        ) : (
          <div className="text-center text-slate-500 mt-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg">Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
