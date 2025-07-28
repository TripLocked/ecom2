// app/contact/page.tsx

import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#121212] py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-[#1a1a1a] shadow-xl rounded-2xl p-10">
        {/* Formulaire de contact */}
        <div>
          <h1 className="text-4xl font-bold text-violet-400 mb-6">Contactez-nous</h1>
          <p className="text-gray-400 mb-10">
            Une question ? Besoin d’assistance ou d’un devis personnalisé ? N'hésitez pas à nous écrire.
          </p>

          <form className="space-y-8">
            <div>
              <label className="block text-violet-400 font-semibold mb-2" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                type="text"
                placeholder="Votre nom"
                className="w-full bg-[#2a2a2a] border border-violet-600 rounded-md py-3 px-4 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="block text-violet-400 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="w-full bg-[#2a2a2a] border border-violet-600 rounded-md py-3 px-4 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>

            <div>
              <label className="block text-violet-400 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Votre message..."
                className="w-full bg-[#2a2a2a] border border-violet-600 rounded-md py-3 px-4 text-gray-300 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="bg-[#121212] rounded-xl p-8 flex flex-col justify-center space-y-8 border border-violet-700 shadow-lg">
          <div>
            <h2 className="text-3xl font-semibold text-violet-400 mb-3">Nos coordonnées</h2>
            <p className="text-gray-400">Nous sommes disponibles du lundi au vendredi de 9h à 18h.</p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">📞 Téléphone</p>
            <p className="text-gray-400">+33 1 23 45 67 89</p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">✉️ Email</p>
            <p className="text-gray-400">support@tonsite.com</p>
          </div>

          <div>
            <p className="text-violet-400 font-semibold mb-1">📍 Adresse</p>
            <p className="text-gray-400">123 Rue du Commerce, 75000 Paris, France</p>
          </div>
        </div>
      </div>
    </main>
  );
}
