import React, {useState, useEffect} from 'react';
import {CircularProgress, 
  Grid, Typography, InputLabel, 
  Select, MenuItem, FormControl} 
  from "@material-ui/core";
import axios from 'axios';
import CostDetails from './CostDetails';
import './CostList.css'

function CostList() {
  const [allPrices, setAllPrices] = useState([]);
  const [rating, setRating] = useState('')
  const [prices, setPrices] = useState('')

  useEffect(() => {
    async function getPrices() {
      const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call')
      // console.log(results.data, "line 15")
      setAllPrices(results.data)
    }
    getPrices()
},[])

  

  return (
    <div className="cost-list-container">
      {/* <Typography variant="h7">Search for Lasik prices around you</Typography> */}
      <div className="cost-list-categories">
        <div className="price-pulldown">
          <FormControl>
            <InputLabel>Price(both eyes)</InputLabel>
            <Select style={{ width: '140px'}} value={prices} onChange={(e) => setPrices(e.target.value)}>
              <MenuItem  value={0}>All Prices</MenuItem>
              <MenuItem value={1000}>Above $1000</MenuItem>
              <MenuItem value={2000}>Above $2000</MenuItem>
              <MenuItem value={3000}>Above $3000</MenuItem>
              <MenuItem value={4000}>Above $4000</MenuItem>
            </Select>
          </FormControl>
        </div>
        
          <FormControl>
            <InputLabel>Ratings</InputLabel>
            <Select  style={{ width: '140px'}} value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All Ratings</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
            </Select>
          </FormControl>
      </div>
      <Grid container spacing={3} >
        {allPrices?.slice(0,15).map((price, i) => (
          <Grid item key={i} xs={12}>
            <CostDetails price={price} />
          </Grid>
        ))}
      </Grid>

    </div>
)
}

export default CostList;