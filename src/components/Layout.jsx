/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
