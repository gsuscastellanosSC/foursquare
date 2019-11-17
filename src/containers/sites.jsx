import React from 'react';
import MapContainer from '../components/MapContainer';
import '../assets/styles/components/Sites.scss';

const Sites = () => (
  <section className="container">
    <section className="info">
      <h1>Informacion</h1>
    </section>
    <section className="map">
      <MapContainer lat={4.6560716} lng={-74.0595918} />
    </section>
  </section>
);

export default Sites;
