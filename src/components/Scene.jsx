import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CardSuit from './CardSuit'
import {
  createHeartShape,
  createDiamondShape,
  createSpadeShape,
  createClubShape,
} from './shapes'

const GRID_SIZE = 5      // 5 x 5 grid
const SPACING = 3.0      // distance between centers

function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

// Pre-create the four shapes once
const SUITS = [
  { shape: createHeartShape(), color: 'red' },
  { shape: createDiamondShape(), color: 'red' },
  { shape: createSpadeShape(), color: 'blue' },
  { shape: createClubShape(), color: 'blue' },
]

export default function Scene() {
  const gridRef = useRef()

  // Slow, continuous rotation of the entire grid
  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += delta * 0.1
      gridRef.current.rotation.x = Math.sin(Date.now() * 0.0005) * 0.05
    }
  })

  // Build the scattered grid — cycles through ♥ ♦ ♠ ♣
  const items = useMemo(() => {
    const result = []
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        const baseX = (x - (GRID_SIZE - 1) / 2) * SPACING
        const baseZ = (z - (GRID_SIZE - 1) / 2) * SPACING

        // Random disalignment: some near, some far, some up, some down
        const posX = baseX + randomRange(-0.4, 0.4)
        const posY = randomRange(-5, 5)
        const posZ = baseZ + randomRange(-0.4, 0.4)

        const suit = SUITS[(x * GRID_SIZE + z) % SUITS.length]

        result.push(
          <CardSuit
            key={`${x}-${z}`}
            shape={suit.shape}
            color={suit.color}
            position={[posX, posY, posZ]}
          />
        )
      }
    }
    return result
  }, [])

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[8, 12, 8]}
        intensity={1.2}
        castShadow
      />
      <pointLight position={[-5, 5, -5]} intensity={0.4} color="#ffffff" />

      {/* Rotating grid group */}
      <group ref={gridRef}>{items}</group>

      {/* Camera controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={4}
        maxDistance={18}
        enablePan={false}
      />
    </>
  )
}
