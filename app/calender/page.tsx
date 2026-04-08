import { events } from "../data/events";

export default function CalendarPage() {
  return (
    <main className="page-background">
      <h1 className="page-title">Calendar</h1>

      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-badge">{event.category}</div>

            <h2 className="event-title">{event.title}</h2>
            <p className="event-description">{event.description}</p>

            <div className="event-details">
              <p className="event-meta">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="event-meta">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="event-meta">
                <strong>Location:</strong> {event.location}
              </p>
            </div>

            <a href={event.link} className="details-button">
              Details
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
