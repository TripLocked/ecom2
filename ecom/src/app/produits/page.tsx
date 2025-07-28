"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const animeList: string[] = [
  "Attack on Titan", "Jujutsu Kaisen", "Demon Slayer", "One Piece", "My Hero Academia",
  "Chainsaw Man", "Spy x Family", "Bleach: Thousand-Year Blood War", "Naruto", "Boruto",
  "Tokyo Revengers", "Blue Lock", "Dr. Stone", "Mob Psycho 100", "Re:Zero",
  "Sword Art Online", "Vinland Saga", "Fullmetal Alchemist: Brotherhood", "Black Clover", "Hunter x Hunter",
  "The Rising of the Shield Hero", "That Time I Got Reincarnated as a Slime", "Fruits Basket", "Kaguya-sama: Love is War", "Classroom of the Elite",
  "The Eminence in Shadow", "Mashle", "Hell's Paradise", "The Promised Neverland", "Erased",
  "Parasyte", "Noragami", "Akame ga Kill!", "Code Geass", "Steins;Gate",
  "Zom 100", "Oshi no Ko", "Solo Leveling", "Berserk", "Made in Abyss",
  "To Your Eternity", "Pluto", "Cyberpunk: Edgerunners", "Dandadan", "Kaiju No. 8",
  "JoJo's Bizarre Adventure", "Horimiya", "86", "Call of the Night", "Rent-a-Girlfriend",
  "The Quintessential Quintuplets", "Your Lie in April", "Vivy: Fluorite Eye’s Song", "Yuri!!! on Ice", "Gintama",
  "Kill la Kill", "Terror in Resonance", "Bakuman", "Anohana", "March Comes in Like a Lion",
  "Great Pretender", "Bunny Girl Senpai", "Devilman Crybaby", "Deadman Wonderland", "No Game No Life",
  "The Garden of Sinners", "Hellsing Ultimate", "Samurai Champloo", "Cowboy Bebop", "Trigun Stampede",
  "Ranking of Kings", "A Silent Voice", "Your Name", "Weathering With You", "I Want to Eat Your Pancreas",
  "Clannad", "Toradora!", "Angel Beats!", "Bocchi the Rock!", "The Dangers in My Heart",
  "Tomo-chan is a Girl!", "Skip and Loafer", "Frieren", "Shangri-La Frontier", "Undead Unluck",
  "Bastard!!", "Ayakashi Triangle", "Nier: Automata Ver1.1a", "The World Ends With You", "Akudama Drive",
  "Arknights", "Tower of God", "God of High School",
];

export default function PageProduit() {
  const [selection, setSelection] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const toggleAnime = (anime: string) => {
    if (selection.includes(anime)) {
      setSelection(selection.filter((a) => a !== anime));
    } else if (selection.length < 10) {
      setSelection([...selection, anime]);
    }
  };

  const isDisabled = (anime: string) =>
    !selection.includes(anime) && selection.length >= 10;

  const filteredAnimes = useMemo(() => {
    return animeList.filter((anime) =>
      anime.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleValidation = () => {
    if (selection.length === 10) {
      const params = new URLSearchParams();
      params.set("animes", JSON.stringify(selection));
      router.push(`/paiement?${params.toString()}`);
    }
  };

  return (
    <main className="bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] min-h-screen py-16 px-6 sm:px-8 lg:px-12 text-slate-300">
      <div className="max-w-6xl mx-auto">
        {/* Header produit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 mb-16"
        >
          <div className="w-full max-w-sm aspect-square rounded-3xl shadow-lg overflow-hidden border border-indigo-700 bg-[#111827]">
            <img
              src="/images/mystery-box.jpg"
              alt="Boîte Mystère Anime"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-indigo-400 mb-4">
              🎁 Boîte Mystère Anime
            </h1>
            <p className="text-slate-400 text-lg mb-4">
              Une expérience unique pour les fans d’anime : choisis{" "}
              <strong className="text-indigo-300">10 séries exactes</strong> et
              reçois <strong className="text-indigo-300">3 figurines surprises</strong> inspirées de ton univers !
            </p>
            <p className="text-indigo-500 font-bold text-2xl mb-2">50€</p>
            <p className="text-sm italic text-slate-500">
              Livraison incluse – La sélection évolue chaque mois 🌟
            </p>
          </div>
        </motion.div>

        {/* Sélection des animes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-[#121823] p-6 rounded-2xl shadow-lg border border-indigo-700"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-indigo-400">
              Fais ta sélection
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Tu dois choisir exactement <strong>10 animes</strong>.
            </p>
          </div>

          <div className="max-w-sm mx-auto mb-6">
            <input
              type="text"
              placeholder="Rechercher un anime..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-indigo-600 bg-[#0d1117] text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-h-[360px] overflow-y-auto pr-2 mb-6 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-indigo-900">
            {filteredAnimes.map((anime) => {
              const selected = selection.includes(anime);
              const disabled = isDisabled(anime);

              return (
                <motion.button
                  key={anime}
                  onClick={() => toggleAnime(anime)}
                  disabled={disabled}
                  whileTap={{ scale: 0.95 }}
                  className={`h-10 px-3 truncate text-sm font-medium flex items-center justify-center rounded-lg border text-center
                    ${
                      selected
                        ? "bg-indigo-700 text-white border-indigo-700 shadow-md"
                        : disabled
                        ? "bg-[#2a2f43] text-slate-600 cursor-not-allowed border-[#2a2f43]"
                        : "bg-[#161b22] text-slate-300 border-indigo-600 hover:bg-indigo-800 hover:text-white"
                    } transition-all duration-200`}
                  title={anime}
                >
                  {anime}
                </motion.button>
              );
            })}
          </div>

          {/* Bouton validation */}
          <div className="text-center">
            <button
              disabled={selection.length !== 10}
              onClick={handleValidation}
              className={`px-6 py-3 rounded-full text-white font-semibold text-lg transition-all duration-300 ${
                selection.length === 10
                  ? "bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-lg"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            >
              Valider ma sélection
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}