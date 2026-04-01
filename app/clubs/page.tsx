import { clubs } from "../data/clubs";

export default function ClubsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Clubs</h1>

      {clubs.map((club) => (
        <div
          key={club.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <h2>{club.name}</h2>
          <p>{club.description}</p>
          <p><strong>Meeting:</strong> {club.meeting}</p>

          <a href={club.link} target="_blank">
            View Club
          </a>
        </div>
      ))}
    </main>
  );
}