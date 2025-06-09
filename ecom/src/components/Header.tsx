export default function Header() {
  return (
    <header style={{
      backgroundColor: "#282c34",
      color: "white",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Ma Boutique</h1>
      <nav>
        <a href="/" style={{ marginRight: "1rem" }}>Accueil</a>
        <a href="/produits">Produits</a>
      </nav>
    </header>
  );
}
