"use client"; // nécessaire pour Framer Motion

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #2b2b5f, #4b6cb7)",
        color: "#f0f0f0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        style={{
          fontSize: "4rem",
          fontWeight: "900",
          textShadow: "0 0 10px #1f1f4f",
          marginBottom: "1rem",
          letterSpacing: "0.15em",
          userSelect: "none",
        }}
      >
        Ma Boutique Unique
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        style={{
          fontSize: "1.4rem",
          maxWidth: "600px",
          lineHeight: "1.6",
          marginBottom: "3rem",
          userSelect: "none",
        }}
      >
        Découvrez une sélection de produits modernes, conçus pour sublimer votre quotidien.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.4)" }}
        whileTap={{ scale: 0.95 }}
        style={{
          background: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)",
          padding: "1rem 3rem",
          borderRadius: "9999px",
          cursor: "pointer",
          userSelect: "none",
          fontWeight: "700",
          fontSize: "1.25rem",
          color: "#fff",
          boxShadow: "0 4px 15px rgba(255, 118, 140, 0.6)",
          transition: "box-shadow 0.3s ease",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        <Link href="/produits" style={{ color: "inherit", textDecoration: "none" }}>
          Voir les produits
        </Link>
      </motion.div>

      {/* Animation d’arrière-plan en légers cercles qui flottent */}

      <motion.div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: "-10%",
          left: "-10%",
          width: "120vw",
          height: "120vh",
          zIndex: 0,
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: ["0%", "15%", "0%"],
              x: ["0%", "-15%", "0%"],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + i * 2,
              ease: "easeInOut",
              delay: i,
            }}
            style={{
              position: "absolute",
              borderRadius: "50%",
              background: `rgba(255, 255, 255, 0.12)`,
              width: `${80 + i * 30}px`,
              height: `${80 + i * 30}px`,
              top: `${i * 15 + 10}%`,
              left: `${i * 20 + 5}%`,
              filter: "blur(25px)",
              zIndex: 0,
            }}
          />
        ))}
      </motion.div>
    </main>
  );
}
