import {useState, useEffect} from 'react'
import './Search.css';
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
import axios from 'axios';
import publicIp from 'public-ip';

function Search({goToMap}) {

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

  // getting the IP address
  // const sourceIp = async () => {
  //   let result = await publicIp.v4();
  //   console.log(result, "IP ADDRESS WORKING")
  // }
  
  
const [ip, setIp] = useState('')

  // async function sourceIp() {
  //   const data = await publicIp.v4();
  //   // console.log(data, "WROKING?")
  //   const result = JSON.parse(data)
  //   console.log(typeof result, "what is result?")
  //   return result
  // }

    // posting location to API
  const postSearch = async (address) => {
    await axios.post('https://wxp5ircbue.execute-api.us-east-1.amazonaws.com/api/location-search',
        {"query_string": address, "source_ip": ip}
        )
          .then(res => {
            console.log(res.data, "post location working??")
          })
          .catch(function (error) {
            console.log(error.response.data); // NOTE - use "error.response.data` (not "error")
          });
  }

  useEffect(() => {
		const getIP = async () => {
			const clientIP = await publicIp.v4()
				.catch((err) => {console.log(err)}) || ''
			setIp(clientIP)
			return clientIP
		}
		getIP()
    
	},[])

  return (
    <div 
      className="search-container"
    >
      <Combobox 
        onSelect={async (address) => {
          setValue(address, false);
          clearSuggestions();
          postSearch(address);
          try {
            const results = await getGeocode({address});
            // console.log(results, "my address")
            const { lat, lng } = await getLatLng(results[0]);
            goToMap({lat, lng});

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
          key={value}
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

export default Search;