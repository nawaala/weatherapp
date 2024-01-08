import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from  './Views/Home'
import Charts from './Views/Charts';
import Register from './Views/Register';
import Advice from './Views/Advice';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Advice" element={<Advice />} />
      </Routes>

    </div>
  );
}

export default App;
