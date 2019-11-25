/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

class MapSites extends React.Component {
  render() {
    const {
      google,
      coords,
    } = this.props;
    return (
      <Map
        google={google}
        zoom={13}
        style={{ width: '100%', height: '100%', position: 'relative' }}
        initialCenter={{ lat: coords[0].lat, lng: coords[0].lng }}

      >

        {/* <Marker
          name="Platzi HQ CDMX"
          position={{ lat: 19.4267261, lng: -99.1718706 }}
          // position={{lat: google[0].venueLat, lng: google[0].venueLon}}
        /> */}
        <Marker
          name=""
          position={{ lat: coords[0].lat, lng: coords[0].lng }}
        />
        {coords.map((point) => {
          return (<Marker
            name="Punto"
            position={{ lat: point.lat, lng: point.lng }}
          />);
        })}
      </Map>
    );
  }
}

// MapContainer.propTypes = {
//   google: PropTypes.object,
//   lat: PropTypes.number,
//   lng: PropTypes.number,
// };

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(MapSites);
