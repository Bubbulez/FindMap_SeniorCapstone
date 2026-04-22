'use client';

import { useState } from 'react';
import { locations, Location } from '../data/locations';

export default function BuildingsPage() {
  const [activeType, setActiveType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const types = ['All', ...new Set(locations.map((loc) => loc.type))];

  const filteredLocations = locations.filter((loc) => {
    const matchesType = activeType === 'All' || loc.type === activeType;
    const matchesSearch = 
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (loc.description || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const clearFilters = () => {
    setActiveType('All');
    setSearchQuery('');
    setSelectedLocation(null);
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Campus Map & Buildings</h1>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for a building..."
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {(activeType !== 'All' || searchQuery !== '') && (
              <button onClick={clearFilters} className="px-6 py-3 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200">
                Clear Filters
              </button>
            )}
          </div>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* List Section */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeType === type ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredLocations.map((loc) => (
                <div 
                  key={loc.id} 
                  className={`p-5 rounded-xl border transition-all ${
                    selectedLocation?.id === loc.id ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-100' : 'bg-white border-gray-200'
                  }`}
                >
                  <span className="text-[10px] font-bold uppercase text-blue-500">{loc.type}</span>
                  <h2 className="text-lg font-bold text-gray-900">{loc.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{loc.address}</p>
                  
                  {/* Map It Button */}
                  <button 
                    onClick={() => setSelectedLocation(loc)}
                    className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    📍 Map It
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Map Section */}
          <div className="lg:w-1/2">
            <div className="sticky top-8 h-[500px] w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {selectedLocation ? (
                <iframe src={selectedLocation.embedUrl} className="w-full h-full border-0" allowFullScreen loading="lazy"></iframe>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <p>Select a building to view the map</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}