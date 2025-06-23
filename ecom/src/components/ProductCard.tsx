import React from "react";
import { Produit } from "@/types/produit";
import Link from "next/link";

interface ProductCardProps {
  produit: Produit;
}

export default function ProductCard({ produit }: ProductCardProps) {
  return (
    <Link href={`/produits/${produit.id}`} passHref>
      <div className="h-full flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
          <img 
            src={produit.image} 
            alt={produit.nom}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-16 h-16 bg-slate-300 rounded-lg flex items-center justify-center">
                    <span class="text-slate-500 text-2xl">📦</span>
                  </div>
                `;
              }
            }}
          />

          {/* Badge (si en promotion) */}
          {produit.promotion && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              -{produit.promotion}%
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-semibold text-slate-800 text-lg mb-2 leading-tight">
            {produit.nom}
          </h3>
          
          <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">
            {produit.description}
          </p>

          {/* Price and Rating */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-slate-800">
                {produit.prix}€
              </span>
              {produit.prixOriginal && (
                <span className="text-sm text-slate-500 line-through">
                  {produit.prixOriginal}€
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-slate-600 text-sm">{produit.rating}</span>
            </div>
          </div>

          {/* Voir le produit */}
          <div className="w-full bg-slate-100 text-center text-slate-700 py-2 rounded-lg font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200">
            Voir le produit
          </div>
        </div>
      </div>
    </Link>
  );
}
