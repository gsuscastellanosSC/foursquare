/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    mail: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const hadleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <section className="register">
      <section className="register__container">
        <h2>Registrate</h2>
        <form className="register__container--form" onSubmit={hadleSubmit}>
          <input
            name="name"
            aria-label="Nombre"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            aria-label="correo"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            aria-label="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Registrarme</button>
          <div className="register__container--remember-me" />
        </form>
        <p className="register__container--register">
          <Link to="/Login">
          Iniciar sesión
          </Link>
        </p>
      </section>
    </section>
  );
};


const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
