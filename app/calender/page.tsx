'use client';

import { useState } from 'react';
import { events } from '../data/events';

export default function CalendarPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(events.map((e) => e.category))];

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === 'All' || event.category === activeCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.description || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Campus Events</h1>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search events..."
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase text-blue-500">{event.category}</span>
                <h2 className="text-xl font-bold mt-1 text-gray-900">{event.title}</h2>
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>
                <p className="text-gray-700 mt-4 text-sm line-clamp-3">{event.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-2">
                <a 
                  href={event.link || '#'} 
                  target="_blank" 
                  className="flex-1 text-center py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors"
                >
                  Details
                </a>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location + " Kean University")}`}
                  target="_blank"
                  className="flex-1 text-center py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-black transition-colors flex items-center justify-center gap-1"
                >
                  📍 Map It
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}