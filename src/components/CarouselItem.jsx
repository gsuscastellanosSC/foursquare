/* eslint-disable react/forbid-prop-types */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable semi */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const {
    id, nameSite, description, rating, type, comments, address, city, country, socialMedia, images, source, isList, coordinates,
  } = props;
  // console.log(`las coordenadas son: ${coordinates[0].lat}, ${coordinates[0].lng}`);
  const handleSetFavorite = () => {
    props.setFavorite({
      ...props,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId)
  };


  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={images} alt={nameSite} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/sites/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {isList
            ? (
              <img
                className="carousel-item__details--img"
                src={removeIcon}
                alt="Remove Icon"
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              />
            )}

          <p className="carousel-item__details--title">{nameSite}</p>
          <p className="carousel-item__details--subtitle">

            {`${nameSite} ${nameSite} ${nameSite}`}

          </p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
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

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
