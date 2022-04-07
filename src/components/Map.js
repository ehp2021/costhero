import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab"

function Map() {
  const isMobile = useMediaQuery('(min-width: 600px');

  const coordinates ={lat: 0, lng: 0};

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDnMf6UwkWGw08_5rZ7tgskfTBS_rAV1kk'}}
        defaultCenter={[]}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        // onChange={''}
        // onChildClick={''}
      >

        
      </GoogleMapReact>
    </div>
)
}

export default Map;