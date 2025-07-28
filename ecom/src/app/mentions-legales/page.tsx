import React from "react";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#121823] text-gray-300 px-6 sm:px-8 lg:px-12 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl font-extrabold text-indigo-400 mb-8">Mentions Légales</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Éditeur du site</h2>
        <p className="text-gray-400 leading-relaxed">
          Le site est édité par <strong>Nom de l'entreprise</strong>,  
          société au capital de XXX €, immatriculée au RCS de [Ville] sous le numéro XXX XXX XXX,  
          dont le siège social est situé à :  
          <br />
          123 rue Exemple, 75000 Paris, France.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Directeur de la publication</h2>
        <p className="text-gray-400 leading-relaxed">
          Monsieur/Madame [Nom du directeur], en qualité de directeur de la publication.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Hébergeur</h2>
        <p className="text-gray-400 leading-relaxed">
          Le site est hébergé par <strong>Nom de l'hébergeur</strong>,  
          dont le siège social est situé à :  
          <br />
          Adresse complète de l'hébergeur.  
          <br />
          Téléphone : XX XX XX XX XX  
          <br />
          Email : contact@hebergeur.com
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Propriété intellectuelle</h2>
        <p className="text-gray-400 leading-relaxed">
          L’ensemble du contenu présent sur ce site, incluant mais ne se limitant pas aux textes, images, vidéos, graphismes, logos, est protégé par le droit de la propriété intellectuelle.  
          Toute reproduction ou utilisation sans autorisation écrite préalable est strictement interdite.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Données personnelles</h2>
        <p className="text-gray-400 leading-relaxed">
          Les données collectées sur ce site sont destinées exclusivement à l’usage de la société et ne seront jamais communiquées à des tiers sans votre consentement explicite, conformément au RGPD.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-violet-400 mb-4">Contact</h2>
        <p className="text-gray-400 leading-relaxed">
          Pour toute question relative aux mentions légales, vous pouvez nous contacter à l’adresse suivante :  
          <br />
          <a href="mailto:contact@exemple.com" className="text-indigo-400 hover:underline">
            contact@exemple.com
          </a>
        </p>
      </section>
    </main>
  );
}
