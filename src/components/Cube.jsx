/**
 * A single grid item.
 *
 * The default renders a simple white box, but you can pass any `children`
 * to swap the geometry for imported GLTF models later. For example:
 *
 *   <Cube position={[x, y, z]}>
 *     <primitive object={gltf.scene} scale={0.5} />
 *   </Cube>
 */
export default function Cube({ position, children }) {
  return (
    <group position={position}>
      {children || (
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial
            color="#d4d4d4"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
      )}
    </group>
  )
}
