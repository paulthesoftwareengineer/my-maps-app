import React from 'react';
import MapComponent from './MapComponent';
// App.js or another component file
import { cities } from './cities';


const cities = [
  { name: 'Seattle', county: 'King County', state: 'Washington', lat: 47.6062, lng: -122.3321 },
  // More cities...
];

function App() {
  return (
    <div className="App">
      <MapComponent cities={cities} />
    </div>
  );
}

export default App;

