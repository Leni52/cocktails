import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Cocktail from './components/Cocktail';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
          <Route path="/cocktails" element={<Cocktail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
