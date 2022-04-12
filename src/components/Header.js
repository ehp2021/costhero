import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Button} from "@material-ui/core";
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';


//hamburger menu imports
// import Drawer from "@mui/material/Drawer";
// import CloseIcon from "@mui/icons-material/Close";
// import Divider from "@mui/material/Divider";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
// import IconButton from '@mui/material/IconButton';

function Header(props) {
  // const [open, setState] = useState(false);
  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setState(open);
  // };



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        style={{background: '#565656'}}>
        <Toolbar>

{/* hamburger menu */}
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

  // outside the drawer
          <Drawer
            anchor="left" 
            variant="temporary" //if and how easily the drawer can be closed
            open={open} //if open is true, drawer is shown
            onClose={toggleDrawer(false)} //function that is called when the drawer should close
            onOpen={toggleDrawer(true)} //function that is called when the drawer should open
          >
            <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#fff",
                  color: "#000"
                }}>
  //The inside of the drawer
              <IconButton sx={{mb: 2}}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{mb: 2}} />
                  <Box sx={{mb: 2}}>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddCircleOutlineOutlinedIcon 
                          sx={{color: "#c8d7d4"}}/>
                      </ListItemIcon>
                      <ListItemText primary="Submit Price" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <LibraryBooksOutlinedIcon sx={{color: "#c8d7d4"}}/>
                      </ListItemIcon >
                      <ListItemText primary="Resources" />
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        <MailOutlineIcon sx={{color: "#c8d7d4"}} />
                      </ListItemIcon>
                      <ListItemText primary="Contact Us" />
                    </ListItemButton>
                  </Box>
            </Box>
          </Drawer> */}


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: "#fff", display: { xs: 'none', sm: 'block' } }}
          >
            CostHero
          </Typography>

          <Typography sx={{flexGrow: 0.1, color: "#fff"}}>About</Typography>
          <Typography sx={{flexGrow: 0.1, color: "#fff"}}>Contact Us</Typography>
          <Typography sx={{flexGrow: 0.1, color: "#fff"}}>Email</Typography>

          <Box>
              <Button 
                onClick={props.openNewPriceModal} 
                variant="contained"
                style={{background: '#bebebe'}}
              >
                  Post Price
              </Button>
            </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;