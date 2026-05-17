import { useMemo } from 'react'

const EXTRUDE_SETTINGS = {
  depth: 0.2,
  bevelEnabled: true,
  bevelThickness: 0.02,
  bevelSize: 0.02,
  bevelSegments: 3,
}

/**
 * A single extruded card-suit token.
 *
 * Props:
 *   - shape:     a THREE.Shape instance
 *   - color:     material colour string
 *   - position:  [x, y, z]
 */
export default function CardSuit({ shape, color, position }) {
  const args = useMemo(() => [shape, EXTRUDE_SETTINGS], [shape])

  return (
    <mesh position={position} castShadow>
      <extrudeGeometry args={args} />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  )
}
