import React from 'react';
import { Link } from 'react-router-dom';
import {Box, 
  Grid, 
  Button, 
  Typography,
  IconButton,
  CircularProgress
} from "@material-ui/core";


function Contact (){

  return(
    <div
      style={{marginTop: '100px' }}
    >
      <Box>
        <Typography variant="h2">
          Contact Form Here
        </Typography>
      </Box>
      
      <Box>
        <Link to="/">
          <Button 
            variant="contained"
            style={{background: '#bebebe'}}>
            Home
          </Button> 
        </Link>
      </Box>
    
    </div>
  )
}

export default Contact;