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

function Map(props) {
  const onLoad = marker => {
    console.log('marker: ', marker)
  }

  console.log(props.allPrices, "map")

  return (
    <div style={{ 
      marginTop: '100px' }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={14}
          center={coordinates}
          options={options}
          library
          >
          {props.allPrices.map((price, i) => (

            <Marker
              onLoad={onLoad}
              position={{lat: Number(price.lat), lng: Number(price.long)}}
              key={i}
              label={price.cost}
            />

          ))}

        </GoogleMap>
      </LoadScript>
    </div>
)
}

export default Map;