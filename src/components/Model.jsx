import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import Scene from '../models/Scene'



const Model = (props) => {


  return (
      <Canvas  style={{height: '300px', maxWidth: '400px', margin: '0 auto', }}>
        <OrbitControls />

        <ambientLight intensity={2} color={'#7e22ce'}/>
        <spotLight  position={[10, 10, 10]} color={'#7e22ce'} intensity={1.4} />
        <spotLight position={[-10, 5, -10]} color={'#67e8f9'} intensity={1.2}/>
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
  )
}

export default Model
