"use client";
import { motion } from "framer-motion";

export default function APropos() {
  return (
    <main className="min-h-screen bg-[#121823] text-gray-300 px-6 sm:px-8 lg:px-12 py-16 max-w-5xl mx-auto">
      {/* Intro */}
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-indigo-400 mb-6"
        >
          À propos de Ma Boutique
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Ma Boutique est née d’un désir simple : offrir des produits élégants et durables qui apportent du sens et du style à votre quotidien.
        </motion.p>
      </section>

      {/* Engagements */}
      <section className="grid md:grid-cols-3 gap-10 mb-20 max-w-6xl mx-auto">
        {[
          {
            icon: "🛍️",
            title: "Sélection rigoureuse",
            text: "Chaque article est choisi avec soin pour sa qualité, son design et son utilité."
          },
          {
            icon: "📦",
            title: "Livraison rapide",
            text: "Nous expédions toutes les commandes sous 24 à 48h avec suivi fourni."
          },
          {
            icon: "💬",
            title: "Service client humain",
            text: "Une équipe disponible, à l’écoute, et réactive pour vous accompagner à tout moment."
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1c2233] p-6 rounded-2xl shadow-md text-center border border-indigo-700"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">{item.title}</h3>
            <p className="text-indigo-400">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Témoignages */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-indigo-400 mb-8">Ce que disent nos clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Clara M.",
              content: "Des produits magnifiques, un service rapide et une expérience parfaite du début à la fin !"
            },
            {
              name: "Julien R.",
              content: "Le service client est exceptionnel. Je recommande à 100%."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1c2233] p-6 rounded-2xl shadow-md border border-indigo-700"
            >
              <p className="text-indigo-400 italic mb-4">“{testimonial.content}”</p>
              <p className="text-indigo-300 font-semibold">– {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
