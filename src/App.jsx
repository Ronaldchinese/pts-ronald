import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Component/ScrollToTop";
import React from 'react';
import './App.css';
import './index.css';
import Home from '../src/pages/Home';
import Mac from '../src/pages/Mac';
import Ipad from '../src/pages/iPad';
import Iphone from '../src/pages/Iphone'
import Iwatch from '../src/pages/Iwatch';
import Ipods from '../src/pages/Ipods';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="Home" element={<Home/>}/>

      <Route path="Mac" element={<Mac/>}/> 

      <Route path="Ipad" element={<Ipad/>}/>

      <Route path="Iphone" element={<Iphone/>}/>

      <Route path="Iwatch" element={<Iwatch/>}/>

      <Route path="Ipods" element={<Ipods/>}/>



    </Routes>

    </Router>
  );
}

export default App;
