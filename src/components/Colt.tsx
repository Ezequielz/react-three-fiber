/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGLTF } from '@react-three/drei'

export function Colt(props: any) {
  const { nodes, materials }: any = useGLTF('/models/m4.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/m4.gltf')