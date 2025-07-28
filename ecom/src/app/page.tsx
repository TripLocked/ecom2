"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { produits } from "@/data/produits";
import { useState, useEffect } from "react";

const carouselImages = [
  "/images/anime1.jpg",
  "/images/anime2.jpg",
  "/images/anime3.jpg",
  "/images/anime4.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] text-slate-300">
      {/* Hero Section with animated bg */}
      <div className="relative overflow-hidden">
        {/* Animated blurred background circles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-900 to-indigo-800 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-pink-800 to-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-20 text-center">
          {/* Carousel */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-12 max-w-4xl rounded-xl overflow-hidden shadow-lg border border-indigo-700"
          >
            <img
              src={carouselImages[currentIndex]}
              alt={`Anime image ${currentIndex + 1}`}
              className="w-full object-cover h-64 sm:h-96"
              draggable={false}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 mb-6"
          >
            Ta <span>Boîte Mystère Anime</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10"
          >
            Choisis 10 animes parmi plus de 100 titres cultes, et reçois 3 figurines surprises inspirées de tes choix — le tout dans une boîte à 50€ frais de port inclus. Une expérience unique pour les vrais fans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/produits">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Commencer ma sélection
              </motion.button>
            </Link>

            <Link href="/a-propos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-600 text-indigo-400 px-8 py-4 rounded-xl font-semibold text-lg hover:border-pink-500 hover:text-pink-400 transition-all duration-300"
              >
                En savoir plus
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

{/* Section figurines populaires */}
<section className="py-16 bg-[#121823]">
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Figurines mises en avant</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        Un aperçu des trésors que tu pourrais retrouver dans ta boîte mystère. Chaque figurine est soigneusement choisie pour sa rareté et son style.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-300 h-56 flex items-center justify-center"
        >
          {/* Ici tu pourras remplacer ce div par une image plus tard */}
          <div className="w-40 h-40 bg-gray-100 rounded-lg"></div>
        </motion.div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
