import React from 'react';
// import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab"
import mapStyles from './mapStyles';
import { GoogleMap, useJsApiLoader, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";


const coordinates ={lat: 40.770981, lng: -73.976429};
const mapContainerStyle = {
  height: '90vh',
  width: '100%'
} 
const library = "places";

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  }

function Map() {

  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  return (
    <div style={{ 
      marginTop: '100px' }}>
      <LoadScript googleMapsApiKey="AIzaSyB85hekHCMvyWrYiFCymBvvKAqQRa8Wwg8">
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={14}
          center={coordinates}
          options={options}
          >
          <Marker
            onLoad={onLoad}
            position={coordinates}
          />

        </GoogleMap>
      </LoadScript>
    </div>
)
}

export default Map;