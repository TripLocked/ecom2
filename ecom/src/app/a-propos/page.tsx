"use client";
import { motion } from "framer-motion";

export default function APropos() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-16 px-6">
      {/* Intro */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-slate-800 mb-6"
        >
          À propos de Ma Boutique
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-slate-600 text-lg max-w-2xl mx-auto"
        >
          Ma Boutique est née d’un désir simple : offrir des produits élégants et durables qui apportent du sens et du style à votre quotidien.
        </motion.p>
      </section>

      {/* Engagements */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20">
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
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Témoignages */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Ce que disent nos clients</h2>
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
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="text-slate-600 italic mb-4">“{testimonial.content}”</p>
              <p className="text-slate-800 font-semibold">– {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
