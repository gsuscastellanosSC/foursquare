import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllSites } from '../actions';
import MapSites from '../components/MapSites';
import ItemSite from '../components/ItemSite';
import '../assets/styles/components/Sites.scss';

const Sites = (props) => {

  const {
    food = [],
    coffee = [],
    night = [],
    fun = [],
    shopping = [],
    Health = [],
    pets = [],
    movie = []
  } = props;

  const cat = props.match.params;
  const cate = cat.id;
  let itemsSites = [];

  if (cate === 'food') {
    itemsSites = food;
  } else if (cate === 'coffee') {
    itemsSites = coffee;
  } else if (cate === 'night') {
    itemsSites = night;
  } else if (cate === 'fun') {
    itemsSites = fun;
  } else if (cate === 'shopping') {
    itemsSites = shopping;
  } else if (cate === 'Health') {
    itemsSites = Health;
  } else if (cate === 'pets') {
    itemsSites = pets;
  } else if (cate === 'movie') {
    itemsSites = movie;
  }

  const coords = [];
  itemsSites.map((item) => {
    coords.push({ lat: item.lat, lng: item.lng });
    return coords;
  });


  useEffect(() => {
    props.getAllSites(itemsSites);
  }, []);


  return (
    <section className="container">
      <section className="info">

        {itemsSites.map((item) => <ItemSite cat={cat} key={item.id} {...item} />)}

      </section>
      <section className="map">
        <MapSites coords={coords} />
      </section>
    </section>
  );
};


const mapStateToProps = (state) => ({
  food: state.food,
  coffee: state.coffee,
  fun: state.fun,
  night: state.night,
  shopping: state.shopping,
  Health: state.Health,
  pets: state.pets,
  movie: state.movie,
});

const mapDispatchToProps = {
  getAllSites,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sites);