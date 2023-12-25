import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from  './Views/Home'
import Charts from './Views/Charts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Charts" element={<Charts />} />
        
      </Routes>

    </div>
  );
}

export default App;
