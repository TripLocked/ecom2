import { Produit } from "@/types/produit";

export const produits: Produit[] = [
  {
    id: "1",
    nom: "Montre en bois naturel",
    description: "Une montre élégante fabriquée à partir de bois durable, idéale pour les amoureux de la nature.",
    prix: 79.99,
    prixOriginal: 99.99,
    promotion: 20,
    image: "/images/produit-bois.jpg",
    rating: 4.7,
  },
  {
    id: "2",
    nom: "Sac à dos vintage",
    description: "Sac à dos en toile avec finitions en cuir, parfait pour les escapades urbaines.",
    prix: 59.95,
    image: "/images/produit-sac.jpg",
    rating: 4.2,
  },
  {
    id: "3",
    nom: "Lampe de bureau LED minimaliste",
    description: "Éclairez votre espace de travail avec cette lampe LED au design épuré et moderne.",
    prix: 39.90,
    image: "/images/produit-lampe.jpg",
    rating: 4.6,
  },
  {
    id: "4",
    nom: "Tasse artisanale en céramique",
    description: "Tasse faite à la main avec un émail naturel, chaque pièce est unique.",
    prix: 24.00,
    image: "/images/produit-tasse.jpg",
    rating: 4.8,
  }
];