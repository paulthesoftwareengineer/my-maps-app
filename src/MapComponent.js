import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapComponent from './MapComponent';

function MapComponent({ cities }) {
  return (
    <MapContainer center={[45.5051, -122.6750]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city, index) => (
        <Marker key={index} position={[city.lat, city.lng]}>
          <Popup>
            {city.name}, {city.county}, {city.state}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
