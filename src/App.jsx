import React from 'react';
import './App.css';
import './index.css';
import Content from './Component/Content';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="Iphone">
  
      <Navbar />
      
      <Content />

      <Footer/>
    </div>
  );
}

export default App;
