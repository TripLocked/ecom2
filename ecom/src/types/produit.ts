export interface Produit {
  id: string;
  nom: string;
  description: string;
  prix: number;
  prixOriginal?: number; // Prix original (optionnel, pour les promotions)
  promotion?: number; // Pourcentage de promotion (optionnel)
  image: string;
  rating: number;
  isNew: boolean; // Indique si le produit est nouveau
  isPopular: boolean; // Indique si le produit est populaire
  isOnSale: boolean; // Indique si le produit est en promotion
}