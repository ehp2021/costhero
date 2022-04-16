import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Box} from '@material-ui/core';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PostNew from './components/PostNew';
import axios from 'axios';

function App() {
  const [newPriceModal, setNewPriceModal] = useState(false);

  // posting a new job
  //https://axios-http.com/docs/post_example
  const postPrice = async (priceDetails) => {
    await axios.post('https://wxp5ircbue.execute-api.us-east-1.amazonaws.com/api/datapoints',
        priceDetails
        )
          .then(res => {
            console.log(res.data, "RES.DATA WORKING??")
          })
          .catch(function (error) {
            console.log(error.response.data); // NOTE - use "error.response.data` (not "error")
          });
        // getPrices();
  }

  return (
    <>
      <BrowserRouter>
        <Box>
          <Header
            openNewPriceModal={() => setNewPriceModal(true)} 
          />
          <PostNew 
            closeModal={() => setNewPriceModal(false)}
            newPriceModal={newPriceModal} 
            postPrice={postPrice}
            />
        </Box>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;