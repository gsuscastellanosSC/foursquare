/* eslint-disable no-trailing-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';


const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const hadleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={hadleSubmit}>
          <input
            name="email"
            aria-label="Correo"
            className="input"
            type="text"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            aria-label="Contraseña"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input
                type="checkbox"
                id="cbox1"
                value="checkbos"
              />Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
          <div>
            <img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">No tienes ninguna cuenta   
          <Link to="/Register">
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
