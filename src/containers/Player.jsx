/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-nested-ternary */
/* eslint-disable func-call-spacing */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getVideoSuorce } from '../actions';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const [loading, changeLoading] = useState(true);
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideoSuorce(id);
    changeLoading(false);
  }, []);

  return loading
    ? <h1 />
    : hasPlaying ? (
      <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
      Your browser does not support HTML5 video.
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => props.history.goBack()}>
                Regresar
          </button>
        </div>
      </div>
    ) : <Redirect to="/404/" />;
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideoSuorce,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
