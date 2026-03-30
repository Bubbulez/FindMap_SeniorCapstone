import Link from "next/link";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <Link href="/events" style={{ padding: "10px 20px", borderRadius: "20px", backgroundColor: "#4a8df6", color: "white", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
        Events
      </Link>

      <Link href="/buildings" style={{ padding: "10px 20px", borderRadius: "20px", backgroundColor: "white", color: "black", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
        Buildings
      </Link>

      <Link href="/dining" style={{ padding: "10px 20px", borderRadius: "20px", backgroundColor: "white", color: "black", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
        Dining
      </Link>

      <Link href="/clubs" style={{ padding: "10px 20px", borderRadius: "20px", backgroundColor: "white", color: "black", textDecoration: "none", fontWeight: "bold", display: "inline-block" }}>
        Clubs
      </Link>
    </div>
  );
}