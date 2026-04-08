import { clubs } from "../data/clubs";

export default function ClubsPage() {
  return (
    <main className="clubs-page">
      <h1 className="clubs-title">Clubs</h1>

      {clubs.map((club, index) => (
        <div key={index} className="club-card">
          {club.thumbnail && (
            <img
              src={club.thumbnail}
              alt={club.name}
              className="club-image"
            />
          )}

          <div>
            <h2 className="club-name">{club.name}</h2>
            <p className="club-description">{club.description}</p>
            <p className="club-meeting">
              <strong>Meeting:</strong> {club.meetingTime}
            </p>
            <a
              href={club.link}
              target="_blank"
              rel="noopener noreferrer"
              className="club-button"
            >
              View Club
            </a>
          </div>
        </div>
      ))}
    </main>
  );
}