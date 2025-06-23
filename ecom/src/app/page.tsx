"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { produits } from "@/data/produits";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-indigo-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-slate-800 mb-6"
            >
              Ma Boutique 
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Unique
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Découvrez une sélection soigneusement curatée de produits modernes, 
              conçus pour sublimer votre quotidien avec élégance et simplicité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/produits">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Découvrir nos produits
                </motion.button>
              </Link>
              
              <Link href="/a-propos">
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200"
                >
              En savoir plus
            </motion.button>
          </Link>

            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Produits Populaires */}
<div className="py-16 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Produits Populaires</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Explorez nos meilleures ventes soigneusement sélectionnées pour vous.
      </p>
    </motion.div>

<div className="grid md:grid-cols-3 gap-8">
  {produits
    .filter((produit) => produit.isPopular)
    .slice(0, 3) // Optionnel : limite à 3 produits
    .map((product, index) => (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      >
        <Link href={`/produits/${product.id}`}>
          <div className="h-56 w-full bg-gray-100 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.nom} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{product.nom}</h3>
            <p className="text-indigo-600 font-bold text-md">{product.prix.toFixed(2)}€</p>
          </div>
        </Link>
      </motion.div>
    ))}
</div>

    <div className="mt-12 text-center">
      <Link href="/produits">
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          Voir tous les produits
        </button>
      </Link>
    </div>
  </div>
</div>
    </main>
  );
}