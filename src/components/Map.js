import React, {useState} from 'react';
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab"
import mapStyles from './mapStyles';
import { GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Search from './Search';

const coordinates ={lat: 40.770981, lng: -73.976429};
const mapContainerStyle = {
  height: '90vh',
  width: '100%'
} 
const library = "places";

const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    zoom: 1,
    minZoom: 1
  }

function Map(props) {
  const [infoOpen, setInfoOpen] = useState(false);
  const [zoom, setZoom] = useState(10);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});

    // create a mapping of our prices to markers
    const markerLoadHandler = (marker, price) => {
      return setMarkerMap(prevState => {
        return { ...prevState, [price.id]: marker };
      });
    };

  const markerClickHandler = (event, price) => {
    // to remember which place was clicked
    setSelectedPlace(price);
    // clicking a 2nd marker works as expected
    // if (infoOpen) {
    //   setInfoOpen(false);
    // }
    setInfoOpen(true);
    // zoom in a little on marker click
    if (zoom < 13) {
      setZoom(14);
    }
  };

  return (
    <div style={{ 
      marginTop: '100px' }}>

      <Search />

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
              onLoad={marker => markerLoadHandler(marker, price)}
              onClick={event => markerClickHandler(event, price)}
              position={{lat: Number(price.lat), lng: Number(price.long)}}
              key={i}
            />
          ))}

          {infoOpen && selectedPlace && (
            <InfoWindow
              position={{lat: Number(selectedPlace.lat), lng: Number(selectedPlace.long)}}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div>
                <h5>{selectedPlace.provider}</h5>
                {/* <h5>{selectedPlace.cost2}</h5>  just the price*/}
                <h5>{selectedPlace.cost}</h5>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
)
}

export default Map;