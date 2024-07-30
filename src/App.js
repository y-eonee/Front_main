import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Main from './Main';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Main />
    </Canvas>
  );
}

export default App;
