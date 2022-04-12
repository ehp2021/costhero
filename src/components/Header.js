import React, {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Search from './Search';

const SearchStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Header() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        style={{background: '#565656'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
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
              {/* The inside of the drawer */}
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
          </Drawer>


          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CostHero
          </Typography>
          <Typography>Search for Lasik Costs in Your area</Typography>

          <SearchStyle>
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            <Search />
            {/* <StyledInputBase
              placeholder="Enter location…"
              inputProps={{ 'aria-label': 'search' }}
            /> */}
          </SearchStyle>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;