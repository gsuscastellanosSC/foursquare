import React from 'react';
import { connect } from 'react-redux';
import MapContainer from '../components/MapContainer';
import '../assets/styles/components/Sites.scss';

const Sites = ({
  MySites, food = [], coffee, night, fun, shopping, Health, pets, movie,
}) => {
  // console.log(food[0].coordinates[0].lat);
  // const coordinates = food[0];
  // console.log(`---------->${coordinates.lat}`);
  // const { lat, lng } = coordinates;
  // console.log(`lat lng ===> ${lat} y ${lng}`);
  const coordinatesFood = food.map((item) => item.coordinates);
  // console.log(coordinatesFood[3]);
  return (
    <section className="container">
      <section className="info">
        <h1>Informacion</h1>
      </section>
      <section className="map">
        <MapContainer lat={coordinatesFood.map((lati) => lati.lat)} lng={coordinatesFood.map((long) => long.lng)} />
      </section>
    </section>
  );
};

const mapStateToProps = (state) => ({
  MySites: state.MySites,
  food: state.food,
  coffee: state.coffee,
  night: state.night,
  fun: state.fun,
  shopping: state.shopping,
  Health: state.Health,
  pets: state.MySites,
  movie: state.MySites,

});

export default connect(mapStateToProps, null)(Sites);
