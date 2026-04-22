'use client';

import { useState } from 'react';
import { DiningOption, diningLocations } from '@/app/data/dining';

export default function DiningPage() {
  const [filter, setFilter] = useState<'all' | 'on-campus' | 'off-campus'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  
  // Initialize with the first item in the data array
  const [selectedLocation, setSelectedLocation] = useState<DiningOption>(diningLocations[0]);

  // Combined Search and Filter Logic
  const filteredLocations = diningLocations.filter((loc) => {
    const matchesFilter = filter === 'all' || loc.type === filter;
    const matchesSearch = 
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      loc.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/3 border-r bg-white flex flex-col">
        <div className="p-6 border-b space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Dining Options</h1>
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search dining locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
          />

          {/* Filter Buttons */}
          <div className="flex gap-2">
            {(['all', 'on-campus', 'off-campus'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`flex-1 py-2 text-xs font-semibold rounded-md border transition-all ${
                  filter === t
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {t === 'all' ? 'All' : t === 'on-campus' ? 'On Campus' : 'Off Campus'}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto flex-1">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`p-4 cursor-pointer border-b transition-colors ${
                  selectedLocation.id === loc.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900">{loc.name}</h3>
                    <p className="text-sm text-gray-500">{loc.location}</p>
                    <span className="text-[10px] uppercase tracking-wider text-blue-500 font-bold">
                      {loc.type.replace('-', ' ')}
                    </span>
                  </div>
                  {favorites.includes(loc.id) && <span className="text-red-500">❤️</span>}
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center text-gray-400 text-sm italic">
              No results found for your search.
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-8 bg-gray-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">{selectedLocation.name}</h2>
            <p className="text-gray-600 mt-1 font-medium">{selectedLocation.location}</p>
            <p className="text-gray-500 text-sm mt-2 max-w-2xl">{selectedLocation.description}</p>
          </div>

          <button
            onClick={() => toggleFavorite(selectedLocation.id)}
            className={`px-5 py-2.5 rounded-lg font-bold border flex items-center gap-2 transition-all ${
              favorites.includes(selectedLocation.id)
                ? 'bg-red-50 text-red-600 border-red-200'
                : 'bg-white text-gray-700 border-gray-300 hover:shadow-md'
            }`}
          >
            {favorites.includes(selectedLocation.id) ? '❤️ Saved' : '🤍 Favorite'}
          </button>
        </div>

        {/* Map Container - Uses mapUrl from dining.ts */}
        <div className="flex-1 rounded-2xl overflow-hidden border border-gray-300 shadow-xl bg-white">
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={selectedLocation.mapUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
}