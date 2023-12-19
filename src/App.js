import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from  './Views/Home'
import Script from './Components/Toggle'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Script/>} />
      </Routes>

    </div>
  );
}

export default App;
