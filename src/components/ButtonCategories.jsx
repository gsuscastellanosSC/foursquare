/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/ButtonCategories.scss';

const ButtonCategories = ({ title, cat }) => (
  <Link to={`/${cat}`}>
     <button className="button__Categories" type="button">{title}</button>
  </Link>
);

export default ButtonCategories;
