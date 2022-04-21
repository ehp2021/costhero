import React from 'react';
import { Link } from 'react-router-dom';
import {Box, 
  Grid, 
  Button, 
  Typography,
  IconButton,
  CircularProgress
} from "@material-ui/core";


function About (){

  return(
    <div
      style={{marginTop: '100px' }}
    >
      <Box style={{margin: '10px'}}>
        <Typography variant="h5">
        Find out what others are paying for LASIK in your city.
        </Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          Why did you build this? What can I do on this website?
          </Typography>
        <Typography variant="body1">
          Our site allows users to compare LASIK providers and costs in your area without doing multiple consultations. 
          We built this to help potential LASIK patients find out the Lasik surgery prices in their area. All of the costs and 
          comments come from real patients who have gotten LASIK. We are adding more and more data every day!
        </Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What is Lasik?
          </Typography>
        <Typography variant="body1">
          Laser-assisted in situ keratomileusis (LASIK), commonly referred to as laser eye surgery or laser vision correction, 
          is a type of refractive surgery for the correction of myopia, hyperopia, and an actual 
          cure for astigmatism, since it is in cornea.
          Lasik can be an alternative to glasses or contact lenses. During LASIK surgery, a special type of cutting laser is used to precisely change the shape of the dome-shaped clear tissue at the front of your eye (cornea) to improve vision.
        </Typography>
        <Typography variant="caption">Source: Wikipedia, Mayo Clinic</Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What is PRK?
          </Typography>
        <Typography variant="body1">
        Radial Keratotomy or RK and Photorefractive Keratectomy or PRK are other refractive surgeries used to reshape the cornea. In RK, a very sharp knife is used to cut slits in the cornea changing its shape. PRK was the first surgical procedure developed to reshape the cornea, by sculpting, using a laser. Later, LASIK was developed. The same type of laser is used for LASIK and PRK. Often the exact same laser is used for the two types of surgery. The major difference between the two surgeries is the way that the stroma, the middle layer of the cornea, is exposed before it is vaporized with the laser. In PRK, the top layer of the cornea, called the epithelium, is scraped away to expose the stromal layer underneath. In LASIK, a flap is cut in the stromal layer and the flap is folded back.
        </Typography>
        <Typography variant="caption">Source: FDA</Typography>
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

export default About;