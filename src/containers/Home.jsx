/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouserItem from '../components/CarouselItem';
import ButtonCategories from '../components/ButtonCategories';
import '../assets/styles/Media.scss';
import '../assets/styles/App.scss';

const Home = ({
  MySites, food, coffee, night, fun, shopping, Health, pets, movie,
}) => {
  return (
    <>
      <Search isHome />
      <div className="button__Search">
        <ButtonCategories title="Comida" type="food" cat="food" />
        <ButtonCategories title="Café" type="coffee" cat="coffee" />
        <ButtonCategories title="Nocturna" type="night" cat="night" />
        <ButtonCategories title="Diversión" type="fun" cat="fun" />
        <ButtonCategories title="Compras" type="shopping" cat="shopping" />
        <ButtonCategories title="Salud" type="Health" cat="Health" />
        <ButtonCategories title="Mascotas" type="pets" cat="pets" />
        <ButtonCategories title="Cine" type="movie" cat="movie" />
      </div>

      {MySites.length > 0
      && (
      <Categories title="Sitios Favoritos">
        <Carousel>
          {MySites.map((item) => (
            <CarouserItem
              key={item.id}
              {...item}
              isList
            />
          ))}
        </Carousel>
      </Categories>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  MySites: state.MySites,
  food: state.food,
  coffee: state.coffee,
  fun: state.fun,
  night: state.night,
  shopping: state.shopping,
  Health: state.Health,
  pets: state.pets,
  movie: state.movie,
  all: state.all,
  prueba: state.prueba,
});

export default connect(mapStateToProps, null)(Home);
