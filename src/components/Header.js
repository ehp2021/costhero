import React from 'react';
// import {Autocomplete} from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';

function Header() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '15px'}}>
      <AppBar 
        style={{ background: '#fff', color: '#1d34b3', font: 'Montserrat'
        }}>
        <Toolbar sx={{minHeight: '50px'}}>
          <Box sx={{fontSize: '40px', fontWeight: '900'}}>
            Cost Hero
          </Box>
          <Typography>Search for Lasik costs in your area</Typography>
          <div className="search-container">
            <SearchIcon style={{alignItems: "center"}} />
            <InputBase placeholder="Search..." style={{ color: '#000', font: 'Montserrat' }} />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;