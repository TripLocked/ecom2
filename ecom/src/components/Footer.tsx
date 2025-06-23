export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">&copy; 2025 Ma Boutique. Tous droits réservés.</p>
          <div className="flex space-x-4 text-sm">
            <a href="/mentions-legales" className="hover:text-indigo-600 transition-colors">Mentions légales</a>
            <a href="/contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            <a href="/a-propos" className="hover:text-indigo-600 transition-colors">À propos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}