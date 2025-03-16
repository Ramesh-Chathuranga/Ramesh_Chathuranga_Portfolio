/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLorder from "../Loader";


const Wolf = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./wolf/wolf.gltf")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
   Object.values(actions).forEach((item)=>{
    item.stop()
   })
   
   if (actions[props.currentAnimation]) {
    actions[props.currentAnimation]?.play();
   }
  }, [actions, props.currentAnimation])
  

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature_0">
          <skinnedMesh
            name="Wolf1_Material__wolf_col_tga_0"
            geometry={nodes.Wolf1_Material__wolf_col_tga_0.geometry}
            material={materials.Wolf_1}
            skeleton={nodes.Wolf1_Material__wolf_col_tga_0.skeleton}
          />
          <skinnedMesh
            name="Wolf2_fur__fella3_jpg_001_0"
            geometry={nodes.Wolf2_fur__fella3_jpg_001_0.geometry}
            material={materials.Wolf_Fur}
            skeleton={nodes.Wolf2_fur__fella3_jpg_001_0.skeleton}
          />
          <skinnedMesh
            name="Wolf3_claws_0"
            geometry={nodes.Wolf3_claws_0.geometry}
            material={materials.Wolf_claws}
            skeleton={nodes.Wolf3_claws_0.skeleton}
          />
          <skinnedMesh
            name="Wolf3_eyes_0"
            geometry={nodes.Wolf3_eyes_0.geometry}
            material={materials['Wolf Eyes']}
            skeleton={nodes.Wolf3_eyes_0.skeleton}
          />
          <skinnedMesh
            name="Wolf3_teeth"
            geometry={nodes.Wolf3_teeth.geometry}
            material={materials['Wolf Teeth']}
            skeleton={nodes.Wolf3_teeth.skeleton}
          />
          <primitive object={nodes._rootJoint} />
        </group>
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials['Material.001']}
          position={[0, -0.0112, 0]}
          scale={0.6373}
        />
        <group
          name="Sun"
          position={[0.5528, 1.1813, 0.8919]}
          rotation={[0.4299, -0.3218, -0.5222]}
        />
      </group>
    </group>
  )
}

const WolfCanvas = ({currentAnimation}) => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setMobile(event.matches)
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <Canvas
      frameloop={'demand'}
      shadows={'percentage'}
      camera={{ position: [0, 0, 5], fov: 70, near: 0.1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <directionalLight intencity={2.5} position={[60, 30, 50]} />
      <ambientLight intencity={2.5} />
      <spotLight
       position={[-1, 0, 2]}
        castShadow
        angle={Math.PI}
        intencity={3}
        penumbra={2}
        shadow-mapSize={1024}
        />
      <Suspense fallback={null} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Wolf
        currentAnimation={currentAnimation}
          rotation={[-0.1, -0.5, -0.1]}
          position={isMobile ? [0, -1, 0] : [0, -0.5, 0]}
          scale={3}
          isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default WolfCanvas;


// const Fox =({isMobile})=> {
//  const object = useGLTF("./wolf/wolf.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor={'black'} />
//       {/* <pointLight
//         intensity={1}
//       /> */}
//       {/* <ambientLight intensity={1}/> */}
//       {/* <spotLight
//         intensity={1}
//         position={[-20, 50, 10]}
//         penumbra={1}
//         angle={0.12}
//         castShadow
//         shadow-mapSize={1024}
//       /> */}

//       <primitive
//         scale={isMobile?0.7: 0.75}
//         position={isMobile?[0,-3,-2,2]:[13, 0, 12]}
//         rotation={[0.01, 0.4, 0.1]}
//         object={object.scene} />
//     </mesh>
//   )
// }