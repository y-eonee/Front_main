import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Main from './Main';
import Particle from './Particle';

function App() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Particle />
      <Canvas style={{ position: 'relative', zIndex: 0 }}>
        <OrbitControls />
        <Main />
      </Canvas>
    </div>
  );
}

export default App;
