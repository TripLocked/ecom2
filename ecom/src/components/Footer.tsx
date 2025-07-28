export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-indigo-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm select-none">
          &copy; 2025 Ma Boutique. Tous droits réservés.
        </p>
        <div className="flex space-x-6 text-sm">
          {["mentions-legales", "contact", "a-propos"].map((page) => (
            <a
              key={page}
              href={`/${page}`}
              className="hover:text-indigo-500 transition-colors duration-300"
            >
              {page === "a-propos" ? "À propos" : page.replace("-", " ")}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
