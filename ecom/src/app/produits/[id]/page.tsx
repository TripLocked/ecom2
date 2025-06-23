"use client";
import { produits } from "@/data/produits";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export default function FicheProduit({ params }: Props) {
  const [produitId, setProduitId] = useState<string | null>(null);
  const [produit, setProduit] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const router = useRouter();

  useEffect(() => {
    params.then((resolvedParams) => {
      const id = resolvedParams.id;
      setProduitId(id);
      const foundProduit = produits.find(p => p.id === id);
      setProduit(foundProduit);
      
      if (!foundProduit) {
        router.replace("/404");
      }
    });
  }, [params, router]);

  if (produitId === null) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex items-center space-x-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          <div className="text-slate-600 font-medium">Chargement...</div>
        </div>
      </main>
    );
  }

  if (!produit) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="text-6xl text-slate-300 mb-4">📦</div>
          <div className="text-xl text-slate-600 font-medium">Produit introuvable</div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <button 
              onClick={() => router.push('/')}
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              Accueil
            </button>
            <span className="text-slate-400">/</span>
            <button 
              onClick={() => router.push('/produits')}
              className="text-slate-500 hover:text-slate-700 transition-colors"
            >
              Produits
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-slate-800 font-medium">{produit.nom}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Image Section */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-slate-100 flex items-center justify-center relative">
                {produit.image ? (
                  <Image
                    src={produit.image}
                    alt={produit.nom}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="text-8xl text-slate-300">📦</div>
                )}
                {produit.promotion && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -{produit.promotion}%
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Header */}
              <div className="border-b border-slate-200 pb-6">
                <h1 className="text-3xl font-bold text-slate-900 mb-3">{produit.nom}</h1>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-slate-600">(4.8) · 127 avis</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold text-slate-900">{produit.prix}€</span>
                  {produit.prixOriginal && (
                    <span className="text-xl text-slate-500 line-through">{produit.prixOriginal}€</span>
                  )}
                </div>
              </div>

              {/* Quick Description */}
              <div className="py-6 border-b border-slate-200">
                <p className="text-slate-700 leading-relaxed">{produit.description}</p>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="py-6 border-b border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <label className="text-sm font-medium text-slate-700">Quantité:</label>
                  <div className="flex items-center border border-slate-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-slate-50 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-slate-50 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">
                    <span>🛒</span>
                    <span>Ajouter au panier</span>
                  </button>
                  <button className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-4 px-6 rounded-xl transition-colors">
                    Acheter maintenant
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="py-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Avantages</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2 text-sm text-slate-700">
                    <span className="text-green-500">✓</span>
                    <span>Livraison gratuite</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-700">
                    <span className="text-green-500">✓</span>
                    <span>Retour 30 jours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-700">
                    <span className="text-green-500">✓</span>
                    <span>Garantie 2 ans</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-700">
                    <span className="text-green-500">✓</span>
                    <span>Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-slate-200">
                <nav className="flex">
                  {['description', 'specifications', 'avis'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSelectedTab(tab)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        selectedTab === tab
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {tab === 'description' && 'Description'}
                      {tab === 'specifications' && 'Spécifications'}
                      {tab === 'avis' && 'Avis (127)'}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {selectedTab === 'description' && (
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      {produit.description}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                )}

                {selectedTab === 'specifications' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Dimensions</h4>
                        <p className="text-slate-700 text-sm">25 x 15 x 10 cm</p>
                      </div>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Poids</h4>
                        <p className="text-slate-700 text-sm">500g</p>
                      </div>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Matériau</h4>
                        <p className="text-slate-700 text-sm">Plastique recyclé</p>
                      </div>
                      <div className="border border-slate-200 rounded-lg p-4">
                        <h4 className="font-semibold text-slate-900 mb-2">Couleur</h4>
                        <p className="text-slate-700 text-sm">Noir, Blanc, Gris</p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedTab === 'avis' && (
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-b border-slate-200 pb-6 last:border-b-0">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-slate-600">U{i}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium text-slate-900">Utilisateur {i}</span>
                              <div className="flex text-yellow-400 text-sm">
                                {'★'.repeat(5)}
                              </div>
                            </div>
                            <p className="text-slate-700 text-sm">
                              Excellent produit, très satisfait de mon achat. La qualité est au rendez-vous et la livraison a été rapide.
                            </p>
                            <p className="text-xs text-slate-500 mt-2">Il y a {i} semaine{i > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => window.history.back()}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <span>Retour à la liste des produits</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}