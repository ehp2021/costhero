import React, {useState, useEffect, useRef, useCallback}from 'react';
import './Home.css';
import CostList from './CostList';
import Map from './Map';
import {CssBaseline, Grid, Container } from '@material-ui/core';
import axios from 'axios';

function Home() {
  const [allPrices, setAllPrices] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);


const getPrices = async () => {
  setLoading(true);
  const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call')
  setAllPrices(results.data)
  setLoading(false);
}

useEffect(()=> {
  getPrices();
}, [])


  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={4} md={4}>
          <CostList allPrices={allPrices}/>
        </Grid>
        <Grid item xs={8} md={8}>
          <Map allPrices={allPrices} />
        </Grid>
      </Grid>
    </Container>
)
}

export default Home;
