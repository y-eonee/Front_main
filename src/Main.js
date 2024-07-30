import React from 'react';
import { Html } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Main.module.css';

export default function Main() {

    const gltf = useLoader(GLTFLoader, '/planet.gltf');
    const model = gltf.scene;

    function onClick(){
        console.log("play now button clicked");
    }

    return (
        <>       
            <ambientLight color={'#ffffff'} intensity={3} />
            <pointLight color ={'#B778FF'} position={[10, 10, 10]} intensity={3} />
            <spotLight color ={'#B778FF'} position={[0, 10, 0]} angle={0.15} penumbra={1} intensity={1} />

            <group position={[0, 0, 0]} scale={[0.9, 0.9, 0.9]}>
                <primitive object={model} />
            </group>

            {/* HTML 요소 */}
            <Html center>
                <div className="centered-container">
                    <h1>Game from Tree</h1>
                    <button className="button" onClick={onClick}>
                        Play now
                    </button>
                </div>
            </Html>
        </>
    );
}
