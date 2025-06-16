// app/contact/page.tsx

import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white shadow-md rounded-2xl p-8">
        {/* Formulaire de contact */}
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Contactez-nous</h1>
          <p className="text-slate-600 mb-8">
            Une question ? Besoin d’assistance ou d’un devis personnalisé ? N'hésitez pas à nous écrire.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 font-medium mb-1">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-700"
              />
            </div>

            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-700"
            />

            <div>
              <label className="block text-slate-700 font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Votre message..."
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-neutral-700 text-neutral-700  "
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">Nos coordonnées</h2>
            <p className="text-slate-600">Nous sommes disponibles du lundi au vendredi de 9h à 18h.</p>
          </div>

          <div>
            <p className="text-slate-700 font-medium">📞 Téléphone</p>
            <p className="text-slate-600">+33 1 23 45 67 89</p>
          </div>

          <div>
            <p className="text-slate-700 font-medium">✉️ Email</p>
            <p className="text-slate-600">support@tonsite.com</p>
          </div>

          <div>
            <p className="text-slate-700 font-medium">📍 Adresse</p>
            <p className="text-slate-600">123 Rue du Commerce, 75000 Paris, France</p>
          </div>
        </div>
      </div>
    </main>
  );
}
