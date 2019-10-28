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

const Home = ({ MySites, food, originals }) => {
  return (
    <>
      <Search isHome />
      <div className="button__c">
        <ButtonCategories title="Comida" type="food" />
        <ButtonCategories title="Café" />
        <ButtonCategories title="Nocturna" />
        <ButtonCategories title="Diversión" />
        <ButtonCategories title="Compras" />
        <ButtonCategories title="Salud" />
        <ButtonCategories title="Mascotas" />
        <ButtonCategories title="Cine" />
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


      <Categories title="Comida">
        <Carousel>
          {food.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Lo mejor de Colombia">
        <Carousel>
          {originals.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => ({
  MySites: state.MySites,
  food: state.food,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);
