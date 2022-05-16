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
      <Box style={{margin: '10px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Typography variant="h5">
        Find out what others are paying for LASIK in your city.
        </Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        {/* <Typography variant="h6">
          Why did you build this? What can I do on this website?
          </Typography> */}
        <Typography variant="body1">
          Our site allows users like you to compare LASIK providers, reviews, and costs in your area without doing multiple consultations. 
          All of the costs and comments come from real patients who have gotten LASIK. We are adding more and more data every day!
        </Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What are the different types of laser vision correction procedures?
          </Typography>
        <Typography variant="body1">
          LASIK, SMILE, PRK are different types of laser vision correction surgeries.
        </Typography>
        <Typography variant="caption">Source: Mayo Clinic</Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What is LASIK?
          </Typography>
        <Typography variant="body1" style={{marginBottom: '10px'}}>
          Laser-assisted in situ keratomileusis (LASIK), commonly referred to as laser eye surgery or laser vision correction, 
          is a type of refractive surgery for the correction of myopia (near-sightedness), hyperopia (far-sightedness), and astigmatism.
          Lasik can be an alternative to glasses or contact lenses. During LASIK surgery, a special type of cutting laser 
          is used to precisely change the shape of the dome-shaped clear tissue at the front of your eye (cornea) to improve vision.
          </Typography>
          <Typography variant="body1" style={{marginBottom: '10px'}}>
          Contoura is a form of personalized LASIK. Traditional LASIK maps the surface of the cornea, but Contoura LASIK provides a much higher 
          level mapping process, targeting 22,000 points. 
          </Typography>
          <Typography variant="body1">
          In order to be a good candidate for LASIK, a patient needs to have an adequate corneal thickness.
          LASIK is the most commonly performed laser eye surgery in practice today.
        </Typography>
        <Typography variant="caption">Source: Mayo Clinic</Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What is PRK?
          </Typography>
        <Typography variant="body1">
        During Photorefractive Keratectomy (PRK), the cornea is also reshaped but no corneal flap is created. 
        Instead, the top cell layer of the cornea, known as the epithelium, is removed, 
        exposing the internal tissues of the cornea. An excimer laser reshapes the cornea to correct vision.
        PRK is an option for patients who are ineligible for LASIK.
        </Typography>
        <Typography variant="caption">Source: FDA</Typography>
      </Box>

      <Box style={{margin: '10px'}}>
        <Typography variant="h6">
          What is SMILE?
          </Typography>
        <Typography variant="body1">
        Small Incision Lenticule Extraction (SMILE) was approved for widespread use in the United States in 2016. 
        SMILE does not use an excimer laser to remove corneal tissue nor does it involve creating a corneal flap. 
        Instead, a femtosecond laser is used to create a small lens-shaped piece of tissue, known as a lenticule, 
        within the cornea. The same laser is used to create a tiny incision on the surface of the cornea 
        to extract the lenticule. This process reshapes the cornea, allowing it to focus light more clearly on the retina, 
        improving vision. Most patients who are candidates for LASIK and PRK are candidates for SMILE.
        </Typography>
        <Typography variant="caption">Source: LaserVue</Typography>
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