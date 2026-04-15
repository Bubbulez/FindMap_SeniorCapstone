// 1. Correct the import path to point to the data folder
import { events } from '../data/events'; 
import Link from 'next/link';

export default function CalendarPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">University Calendar</h1>
        <p className="text-gray-600">Explore upcoming campus events.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 2. Map through the events array from your data file */}
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex-1">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide uppercase bg-blue-100 text-blue-800 rounded-full">
                {event.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {event.description}
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-2">📅</span> {event.date}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏰</span> {event.time}
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📍</span> {event.location}
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link 
                href={event.link} 
                className="text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}