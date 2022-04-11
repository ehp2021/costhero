import React, {useState, useEffect}from 'react';
import './App.css';
import CostList from './components/CostList';
import Map from './components/Map';
import Header from './components/Header';
import {CssBaseline, Grid} from '@material-ui/core';
import axios from 'axios';

function App() {
  const [allPrices, setAllPrices] = useState([]);

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    async function getPrices() {
      const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call')
      // console.log(results.data[2], "line 15")
      setAllPrices(results.data)
    }
    getPrices()
},[])


  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <CostList allPrices={allPrices}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map allPrices={allPrices}/>
        </Grid>
      </Grid>
    </div>
)
}

export default App;
