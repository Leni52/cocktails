import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cocktail from './components/Cocktail';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
          <Route path="/cocktails" element={<Cocktail />} />
        </Routes>
     <Footer />
    </div>
  );
}

export default App;
