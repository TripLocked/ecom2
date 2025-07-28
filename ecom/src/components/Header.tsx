"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/produits?search=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#0d1117] border-b border-indigo-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between text-slate-300">
        <Link href="/" className="flex items-center space-x-2" aria-label="Accueil">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-extrabold text-indigo-400 select-none"
          >
            M
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg font-semibold text-slate-300 select-none"
          >
            Ma Boutique
          </motion.span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-indigo-400 font-medium select-none">
          {[
            { href: "/", label: "Accueil" },
            { href: "/produits", label: "Produits" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Toggle menu mobile */}
        <button
          className="md:hidden text-indigo-400 hover:text-indigo-600 transition"
          aria-label="Menu mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menu mobile animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#121823] border-t border-indigo-700 px-6 py-4 space-y-4 text-indigo-400 font-medium select-none"
          >
            {[
              { href: "/", label: "Accueil" },
              { href: "/produits", label: "Produits" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-indigo-600 transition-colors"
              >
                {label}
              </Link>
            ))}

            <form onSubmit={handleSearch} className="flex items-center space-x-2 mt-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher..."
                className="flex-1 px-3 py-2 rounded-lg border border-indigo-600 bg-[#161b22] text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
              >
                Go
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
