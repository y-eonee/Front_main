import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Main from './Main';
import Particle from './Particle';
import Redirection from './Redirection';
import LoginSuccess from './LoginSuccess';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Login';
import Ranking from './Ranking';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Particle />
      <Canvas style={{ position: 'relative', zIndex: 0 }}>
        <OrbitControls />
        <Router>
          <Routes>
            <Route path="/" element = {<Main/>} />
            <Route path="/login" element = {<Login />} />
            <Route path="/Ranking" element = {<Ranking />} />
            <Route path='/login/oauth/kakao' element={<Redirection />}/>
            <Route path="/loginSuccess" element = {<LoginSuccess/> } />
          </Routes>
        </Router>
        
      </Canvas>

     
    </div>
  );
}

export default App;
