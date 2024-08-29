import './InGame.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { TextComponent } from './components/TextComponent';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes';
import { Building } from './components/Building';
import { Crystal } from './components/Crystal';
import { GameProvider, useGameContext } from './components/GameContext';
import { NightSky } from './components/NightSky';

function InGame() {
  return (
    <GameProvider>
      <Canvas shadows>
        <NightSky />
        <pointLight position={[5, 2, 0.2]} intensity={20} distance={10} />
        <FPV />
        <TextComponent />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
          <Crystal />
          <Building />
        </Physics>
      </Canvas>
      <FixedUI />
    </GameProvider>
  );
}

const FixedUI = () => {
  const { cubesRemoved, crystalMelted, weaponMade } = useGameContext();

  return (
    <>
      <div className='centered cursor'>+</div>
      <div className='overlay-text'>
        {'💎 Crystal Cube ---- ' + cubesRemoved}<br />
        {'🫧 Melted Crystal -- ' + crystalMelted}<br />
        {'🗡️ Weapon -------- ' + weaponMade}
      </div>
    </>
  );
};

export default InGame;
