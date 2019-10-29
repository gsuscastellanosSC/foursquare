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

      <Categories title="Café">
        <Carousel>
          {coffee.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Nocturna">
        <Carousel>
          {night.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Diversión">
        <Carousel>
          {fun.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Compras">
        <Carousel>
          {shopping.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Salud">
        <Carousel>
          {Health.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Mascotas">
        <Carousel>
          {pets.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title="Cine">
        <Carousel>
          {movie.map((item) => <CarouserItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
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
});

export default connect(mapStateToProps, null)(Home);
