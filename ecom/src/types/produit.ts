// src/types/produit.ts
export interface Produit {
  id: string;
  nom: string;
  description: string;
  image?: string;
  prix: number;
  prixOriginal?: number;
  promotion?: number;
  rating?: number;
}