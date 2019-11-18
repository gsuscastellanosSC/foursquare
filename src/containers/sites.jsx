import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVideoSuorce } from '../actions';
import MapContainer from '../components/MapContainer';
import '../assets/styles/components/Sites.scss';

const Sites = (props) => {
  const {
    nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, coordinates,
  } = props.playing;
  // console.log(food[0].coordinates[0].lat);
  // const coordinates = food[0];
  // console.log(`---------->${coordinates.lat}`);
  // const { lat, lng } = coordinates;
  // console.log(`lat lng ===> ${lat} y ${lng}`);
  const { id } = props.match.params;
  // const coordinatesFood = food.map((item) => item.coordinates);
  // console.log(coordinatesFood[3]);
  useEffect(() => {
    props.getVideoSuorce(id);
  }, []);
  const hasPlaying = Object.keys(props.playing).length;
  const { play } = props.playing;
  console.log(`Las propiedades del sitio: ${hasPlaying} --- ${description}`);
  return (
    <section className="container">
      <section className="info">
        <h1>
          {`Information ${id}`}
        </h1>
        <ul>
          <li>{`Nombre: ${nameSite}`}</li>
          <li>{`rating: ${rating}`}</li>
          <li>{`type: ${type}`}</li>
          <li>{`comments: ${comments}`}</li>
          <li>{`address: ${nameSite}`}</li>
          <li>{`city: ${city}`}</li>
        </ul>
      </section>
      <section className="map">
        mapa
      </section>
    </section>
  );
};

Sites.propTypes = {
  nameSite: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  type: PropTypes.string,
  comments: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  socialMedia: PropTypes.array,
  images: PropTypes.string,
  source: PropTypes.string,
  coordinates: PropTypes.array,
};


const mapStateToProps = (state) => ({
  playing: state.playing,
  // MySites: state.MySites,
  // food: state.food,
  // coffee: state.coffee,
  // night: state.night,
  // fun: state.fun,
  // shopping: state.shopping,
  // Health: state.Health,
  // pets: state.MySites,
  // movie: state.MySites,

});

const mapDispatchToProps = {
  getVideoSuorce,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sites);
