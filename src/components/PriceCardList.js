import React, { useState, useEffect } from 'react';
import PriceCard from "./PriceCard";
import axios from 'axios';
import { Button, Box, Container } from "@material-ui/core";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';


function PriceCardList (props) { 
  const [allPrices, setAllPrices] = useState([]);

  // get all prices
  useEffect(() => {
    async function getPrices() {
      const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call');
      console.log(typeof(results.data), "line 15")
      setAllPrices(results.data)
    }
    getPrices()
},[])

// show all prices
function showPrices(arr) {
  return arr.map(company => {
    return (
      <PriceCard key={price.name} />
    )
  })
}


return (
  <Container>
    <Grid container spacing={2} columns={16}>
      <Grid item xs={4}>
        LEFT SIDE BAR
      </Grid>
      <Grid item xs={12}>
      

      </Grid>
    </Grid>
  </Container>

)


}


export default PriceCardList;