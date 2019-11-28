import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVideoSuorce } from '../actions';
import MapContainer from '../components/MapContainer';
import ItemSite from '../components/ItemSite';
import '../assets/styles/components/Sites.scss';

const Site = (props) => {
  const {
    nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, lat, lng,
  } = props.playing;

  const { id } = props.match.params;

  useEffect(() => {
    props.getVideoSuorce(id);
  }, []);
  const hasPlaying = Object.keys(props.playing).length;

  console.log(`Las propiedades del sitio: ${hasPlaying} --- ${props.playing}`);
  return (
    <section className="container">
      <section className="info">
        <ItemSite id={id} nameSite={nameSite} description={description} rating={rating} type={type} comments={comments} address={address} city={city} country={country} socialMedia={socialMedia} images={images} />
      </section>
      <section className="map">
        <MapContainer flag="site" lat={lat} lng={lng} />
      </section>
    </section>
  );
};

Site.propTypes = {
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
});

const mapDispatchToProps = {
  getVideoSuorce,
};

export default connect(mapStateToProps, mapDispatchToProps)(Site);
