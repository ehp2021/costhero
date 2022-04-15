import React, {useState, useRef, useCallback} from 'react';
import mapStyles from './mapStyles';
import './Map.css';
import {Button} from "@material-ui/core";
import { GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Divider from "@mui/material/Divider";
import {Chip} from "@material-ui/core";
// import Search from './Search';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const coordinates ={lat: 40.770981, lng: -73.976429};
const mapContainerStyle = {
  height: '90vh',
  width: '100%'
} 

// https://cloud.google.com/blog/products/maps-platform/loading-google-maps-platform-javascript-modern-web-applications


const options = {
    styles: mapStyles,
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

  // const [ libraries ] = useState(['places']);

  const mapRef = useRef();
  const onMapLoad = useCallback((map)=> {
    mapRef.current = map;
  }, []); 

  // PANS TO searched position on map
  const panTo = useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  })

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

      <Search panTo={panTo} />

      {/* <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
      > */}
      
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={14}
          center={coordinates}
          options={options}
          // libraries
          >

          {props.allPrices.map((price, i) => (
            <Marker
              onLoad={marker => markerLoadHandler(marker, price)}
              onClick={event => markerClickHandler(event, price)}
              position={{lat: Number(price.lat), lng: Number(price.long)}}
              key={i}
              icon={{
                url: "/eye.png",
                scaledSize: new window.google.maps.Size(30,30)
              }}
            />
          ))}

          {infoOpen && selectedPlace && (
            <InfoWindow
              position={{lat: Number(selectedPlace.lat), lng: Number(selectedPlace.long)}}
              onCloseClick={() => setInfoOpen(false)}
              key={selectedPlace.id}
            >
              <div>
                <h5>Provider: {selectedPlace.provider}</h5>
                <Divider sx={{mb: 1}} />
                {/* <h5>{selectedPlace.cost2}</h5>  just the price*/}
                <h5>Cost: {selectedPlace.cost ? selectedPlace.cost : "N/A"}</h5>
                <h5>Date: {selectedPlace.time ? selectedPlace.time : "N/A"}</h5>
                <h5>Location: {selectedPlace.area ? selectedPlace.area : "N/A"}</h5>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      {/* </LoadScript> */}
    </div>
)
}

export default Map;

//Locate person
function Locate({ panTo }) {
  return (
    <Button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.png" alt="compass" />
    </Button>
  );
}

// SEARCH SECTION

function Search({panTo}) {
  const {
    ready, 
    value, 
    suggestions: {status, data}, 
    setValue, 
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: ()=> 40.770981, lng: () => -73.976429},
      radius: 200 * 1000, // in meters 
    }
  });

  return (
    <div 
      className="search-container"
    >
      <Combobox 
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          try {
            const results = await getGeocode({address});
            console.log(results, "RESULTS?")
            const {lat, lng} = await getLatLng(results[0]);
            panTo({lat, lng});
          } catch(error) {
            console.log("error")
          }
        }}
      >
        <ComboboxInput 
          className="search-container"
          value={value}
          onChange={(e) => { setValue(e.target.value);}}
          disabled={!ready}
          placeholder="Search Location..."
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
            data.map(({ id, description }) => (
              <ComboboxOption 
                key={id} 
                value={description} />
            ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}