import { Autocomplete } from "@react-google-maps/api";
import {Box, 
  Grid, 
  FilledInput,
  Button
} from "@material-ui/core";

const Search = () => {

  // const onLoad = autocomplete => {
  //   console.log('autocomplete: ', autocomplete)
  // }

    //https://github.com/wellyshen/use-places-autocomplete#load-the-library 
  return (
    <>
      <Box>
        <Autocomplete>
          <FilledInput 
            disableUnderline 
            fullWidth
          />
        </Autocomplete>
        <Button
          variant="contained" 
          disableElevation
          color="primary"
        >
          Search
        </Button>

      </Box>
    </>
  );
};

export default Search;