import PriceCardList from "./components/PriceCardList";
import Navbar from "./components/Navbar";
import Submit from "./components/Submit";
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          {/* <Navbar /> */}
          <div className="body-container">
            <Routes>
              <Route path='/submit' element={<Submit/>} />
              <Route path='/' element={<PriceCardList />} />
            </Routes>
            
          </div>
        </BrowserRouter>
    </div>
)
}

export default App;
