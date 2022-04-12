import React, {useState, useEffect}from 'react';
import './App.css';
import CostList from './components/CostList';
import Map from './components/Map';
import Header from './components/Header';
import PostNew from './components/PostNew';
import {CssBaseline, Grid, Container, Box} from '@material-ui/core';
import axios from 'axios';

function App() {
  const [allPrices, setAllPrices] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [newPriceModal, setNewPriceModal] = useState(false);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function getPrices() {
//       const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call')
//       // console.log(results.data[2], "line 15")
//       setAllPrices(results.data)
//     }
//     getPrices()
// },[])

const getPrices = async () => {
  setLoading(true);
  const results = await axios('https://cpx2ojoaua.execute-api.us-east-1.amazonaws.com/call')
  setAllPrices(results.data)
  setLoading(false);
}

//https://axios-http.com/docs/post_example 
//adding a new job to API
// const postPrice = async (priceDetails) => {
//   e.preventDefault();
//   axios.post('https://wxp5ircbue.execute-api.us-east-1.amazonaws.com/api/datapoints',{
//     provider: data.provider,
//     })
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
//   getPrices();
// }

useEffect(()=> {
  getPrices();
}, [])


  return (
    <Container>
      <CssBaseline />
      <Box>
        <Header
          openNewPriceModal={() => setNewPriceModal(true)} 
        />
        <PostNew 
          closeModal={() => setNewPriceModal(false)}
          newPriceModal={newPriceModal} 
          // postPrice={postPrice}
          />
      </Box>
      

      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <CostList allPrices={allPrices}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map allPrices={allPrices}/>
        </Grid>
      </Grid>
    </Container>
)
}

export default App;
