import { produits } from "@/data/produits";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Produits() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nos Produits
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez notre collection soigneusement sélectionnée de produits d'exception
          </p>
          
          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filters Section (optionnel) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200">
            Tous
          </button>
          <button className="px-6 py-2 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors duration-200">
            Nouveautés
          </button>
          <button className="px-6 py-2 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors duration-200">
            Populaires
          </button>
          <button className="px-6 py-2 bg-slate-200 text-slate-700 rounded-full hover:bg-slate-300 transition-colors duration-200">
            Promotions
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {produits.map((produit) => (
            <Link 
              key={produit.id} 
              href={`/produits/${produit.id}`}
              className="group block transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100">
                <ProductCard produit={produit} />
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Vous ne trouvez pas ce que vous cherchez ?
          </h3>
          <p className="text-slate-600 mb-6">
            Contactez-nous pour des recommandations personnalisées
          </p>
          <Link 
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Nous Contacter
            </Link>
        </div>
      </div>
    </main>
  );
}