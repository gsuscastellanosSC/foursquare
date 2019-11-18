/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

class MapContainer extends React.Component {
  render() {
    const {
      google,
      lat,
      lng,
    } = this.props;
    // console.log(`las coordenadas son: ${coordinates[0].lat}, ${coordinates[0].lng}`);
    // const { lng } = coordinates[0];
    // const { lat } = coordinates[0];

    return (
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat, lng }}

      >

        {/* <Marker
          name="Platzi HQ CDMX"
          position={{ lat: 19.4267261, lng: -99.1718706 }}
          // position={{lat: google[0].venueLat, lng: google[0].venueLon}}
        /> */}
        <Marker
          name="Platzi HQ Bogota"
          position={{ lat: 4.6560716, lng: -74.0595918 }}
        />
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
})(MapContainer);
