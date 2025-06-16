import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold text-lg">M</span>
              </div>
              <span className="text-slate-800 font-semibold text-xl">Ma Boutique</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link 
              href="/produits" 
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors duration-200"
            >
              Produits
            </Link>
            <Link 
              href="/contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
