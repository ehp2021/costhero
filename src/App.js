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

function App() {
  const [newPriceModal, setNewPriceModal] = useState(false);


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
            // postPrice={postPrice}
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