import React, {useState, useRef, useCallback, useEffect} from 'react';
import mapStyles from './mapStyles';
import './Map.css';
import {Button, Box, Typography} from "@material-ui/core";
import { GoogleMap, LoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Divider from "@mui/material/Divider";
import Search from './Search';



const coordinates ={lat: 40.770981, lng: -73.976429};
const mapContainerStyle = {
  height: '70vh',
  width: '100%'
} 

// https://cloud.google.com/blog/products/maps-platform/loading-google-maps-platform-javascript-modern-web-applications


const options = {
    // styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    zoom: 14,
    minZoom: 2,

  }

function Map(props) {
  const [infoOpen, setInfoOpen] = useState(false);
  const [zoom, setZoom] = useState(10);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});


  const mapRef = useRef();
  const onMapLoad = useCallback((map)=> {
    mapRef.current = map;
  }, []); 

  // PANS TO searched position on map
  const goToMap = useCallback(({lat, lng}) => {
    mapRef.current?.panTo({lat, lng});
    mapRef.current?.setZoom(12);
  }, [])

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
      marginTop: '70px' }}>

      {/* <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
      > */}
        <Typography variant="h6" style={{marginBottom: '10px', color: '#222286'}}>Search and compare 427 real cost quotes from real patients from around the globe</Typography>
        <Typography variant="body1">How Much Does Lasik Eye Surgery Cost Near Me? </Typography>

        <Search  goToMap={goToMap} />
      
        <Typography variant="body1">Click on the eye marker to view Lasik prices and other provider information</Typography>

        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={14}
          minZoom={1}
          center={coordinates}
          options={options}
          onLoad={onMapLoad}
          >

          {props.allPrices.map((price, i) => (
            <Marker
              onLoad={marker => markerLoadHandler(marker, price)}
              onClick={event => markerClickHandler(event, price)}
              position={{lat: Number(price.lat), lng: Number(price.long)}}
              key={i}
              icon={{
                url: "/owl.png",
                color: '#222286',
                scaledSize: new window.google.maps.Size(40,40)
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
                <Box>
                  <Box style={{background: "#fee3ed", padding: '5px'}}>
                    <Typography variant="body1" sx={{ flexGrow: 0.01 }} >
                      Provider: {selectedPlace.provider ? selectedPlace.provider : "N/A"}
                    </Typography>
                    <h5>Surgery Type: {selectedPlace.surgery_type ? selectedPlace.surgery_type : "N/A"}</h5>
                  </Box>
                  <Divider sx={{mb: 1}} />
                  
                  <h5>Cost: {selectedPlace.processed_cost ? selectedPlace.processed_cost : "N/A"} {selectedPlace.currency ? selectedPlace.currency : "N/A"}</h5>  
                  {/* <h5>Cost: {selectedPlace.cost ? selectedPlace.cost : "N/A"}</h5> */}
                  <h5>Date Of Surgery: {selectedPlace.time ? selectedPlace.time : "N/A"}</h5>
                  <h5>Prescription Prior: {selectedPlace.prescription_prior ? selectedPlace.prescription_prior : "N/A"}</h5>
                  <Typography variant="caption" sx={{ flexGrow: 0.01 }} >
                    Comments: {selectedPlace.raw ? selectedPlace.raw : "N/A"}
                  </Typography>
                  <Typography variant="caption" sx={{ flexGrow: 0.01 }} >
                    Free Touch Up Policy?: {selectedPlace.free_touch_up_policy ? selectedPlace.free_touch_up_policy : "N/A"}
                  </Typography>
                </Box>
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
// function Locate({ panTo }) {
//   return (
//     <Button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.png" alt="compass" />
//     </Button>
//   );
// }

