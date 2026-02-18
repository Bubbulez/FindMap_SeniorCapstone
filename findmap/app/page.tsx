export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #f8b7c8, #c7a6ff, #b9d6ff)",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "60px", color: "white" }}>
        FindMap
      </h1>

      <p style={{ color: "white", fontWeight: "bold", marginBottom: "20px" }}>
        FIND EVENTS. FIND BUILDINGS. FIND YOUR WAY.
      </p>

      <button style={{
        padding: "12px 25px",
        borderRadius: "30px",
        border: "none",
        fontWeight: "bold",
        backgroundColor: "#ff7a59",
        color: "white",
        cursor: "pointer"
      }}>
        Explore Campus Events
      </button>
    </main>
  );
}
