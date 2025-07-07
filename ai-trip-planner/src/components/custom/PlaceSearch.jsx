import React, { useState } from 'react';
import axios from 'axios';

function PlaceSearch({ onSelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 3) {
      setResults([]);
      return;
    }

    const res = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: value,
        format: 'json',
        addressdetails: 1,
        limit: 5,
      },
    });

    setResults(res.data);
  };

  const handleSelect = (place) => {
    setQuery(place.display_name); // show selected value in input
    setResults([]);
    onSelect({
      label: place.display_name,
      lat: place.lat,
      lon: place.lon,
    });
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Enter a location..."
        className="w-full p-2 border border-gray-300 rounded"
      />

      {results.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 w-full rounded shadow mt-1 max-h-60 overflow-y-auto">
          {results.map((place, index) => (
            <li
              key={index}
              onClick={() => handleSelect(place)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlaceSearch;
