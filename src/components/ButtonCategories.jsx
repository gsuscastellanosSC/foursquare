import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getAllSites from '../actions';
import '../assets/styles/components/ButtonCategories.scss';

// eslint-disable-next-line react/prop-types
const ButtonCategories = ({ title, cat }) => (
  <Link to={`/sites/${cat}`}>
    <button className="button__Categories" type="button">{title}</button>
  </Link>
);

export default ButtonCategories;
