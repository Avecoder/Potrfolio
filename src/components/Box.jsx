import { useRef } from 'react'

import { useLoader, useFrame } from '@react-three/fiber'


const Box = (props) => {
  const boxRef = useRef();

  useFrame(() => {
    boxRef.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={boxRef} position={[10, 0, 0]} rotation={[90, 0, 90]} rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}  scale={2}>
      <boxBufferGeometry attach="geometry" color="hotpink" rotation={true}></boxBufferGeometry>
      <meshNormalMaterial attach="material" />
    </ mesh>
  )
}

export default Box
