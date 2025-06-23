"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/produits?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMenuOpen(false); // ferme le menu mobile si ouvert
    }
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2" aria-label="Accueil">
            <span className="text-2xl font-bold text-blue-600">M</span>
            <span className="text-lg font-semibold text-gray-700">Ma Boutique</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Accueil</Link>
          <Link href="/produits" className="text-gray-700 hover:text-blue-500">Produits</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-neutral-800 placeholder:text-neutral-800"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Chercher
            </button>
          </form>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white border-t border-gray-200">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/produits"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Produits
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <form onSubmit={handleSearch} className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="flex-1 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
