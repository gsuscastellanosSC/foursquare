/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setsearch } from '../actions';
import Categories from './Categories';
import Carousel from './Carousel';
import CarouserItem from './CarouselItem';
import '../assets/styles/components/CarouselItem.scss';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { isHome, search, isSearch } = props;
  const hasSearch = Object.keys(search).length > 0;
  const handleInput = (event) => {
    props.setsearch(event.target.value);
  };
  const inputStyle = classNames('input', {
    isHome,
  });
  const searchStyle = classNames('categories', {
    isSearch,
  });
  return (
    <div>
      <section className="main">
        <h2 className="main__title">¿A donde quieres ir hoy?</h2>
        <input type="text" name="search" className={inputStyle} placeholder="Buscar..." onChange={handleInput} />
        {hasSearch ? (
          <Categories title="Resultados" className={searchStyle}>
            <Carousel>
              {search.map((item, index) => <CarouserItem key={index} {...item} />)}
            </Carousel>
          </Categories>
        ) : null }
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

const mapDispatchToProps = {
  setsearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
