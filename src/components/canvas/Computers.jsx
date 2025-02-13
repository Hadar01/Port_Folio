import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      
      const { clientX, clientY } = event;
      const xRotation = ((clientY / window.innerHeight) * 2 - 1) * 0.01; // Reduce rotation intensity
      const yRotation = ((clientX / window.innerWidth) * 2 - 1) * 0.01; // Reduce rotation intensity
      setRotation([xRotation, yRotation, 0]);
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  
  

  useFrame(() => {
    if (!isMobile) {
      computer.scene.rotation.x = rotation[0];
      computer.scene.rotation.y = rotation[1];
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor='black' />
      <spotLight
        position={[-20, 50, 45]}
        angle={0.5}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 2.5 : 3.25}
        position={isMobile ? [0, -3.5, 0] : [0, -3.75, 0]}
        rotation={isMobile ? [-0.02, -0.0125, -0.0125] :[0,  Math.PI / 2., -0.0125]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate={true}
        autoRotateSpeed={3.0}
          enableZoom={false}
          enablePan={isMobile? true : false}
          enableDamping={true}
          dampingFactor={0.2}
          // in this my model is rotating fine with the mouse in mobile version ,but in windows view it rotating too much like all over the website but i want it to only rotate on its orgin
          
         
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
