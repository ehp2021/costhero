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
          //onClick --> post location keyword to API
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

export default Search;