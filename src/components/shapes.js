import * as THREE from 'three'

export function createHeartShape() {
  const shape = new THREE.Shape()
  // Bottom tip
  shape.moveTo(0, -0.8)
  // Right side up to the right lobe
  shape.bezierCurveTo(0.1, -0.55, 0.7, -0.3, 0.75, 0.05)
  // Right lobe — full round arc over the top
  shape.bezierCurveTo(0.75, 0.4, 0.4, 0.6, 0.0, 0.25)
  // Left lobe — mirror of right lobe
  shape.bezierCurveTo(-0.4, 0.6, -0.75, 0.4, -0.75, 0.05)
  // Left side back down to the bottom tip
  shape.bezierCurveTo(-0.7, -0.3, -0.1, -0.55, 0, -0.8)
  return shape
}

/**
 * Diamond — centered around origin, ~1.0 unit tall.
 * Edges drawn with quadratic curves to add subtle inward (concave) curvature.
 */
export function createDiamondShape() {
  const shape = new THREE.Shape()
  // Start at the top point
  shape.moveTo(0, 0.5)
  // Top to Right: The control point (0.15, 0.15) pulls the curve inward toward the center
  shape.quadraticCurveTo(0.15, 0.15, 0.4, 0)
  // Right to Bottom
  shape.quadraticCurveTo(0.15, -0.15, 0, -0.5)
  // Bottom to Left
  shape.quadraticCurveTo(-0.15, -0.15, -0.4, 0)
  // Left to Top, returning to start
  shape.quadraticCurveTo(-0.15, 0.15, 0, 0.5)
  return shape
}
/**
 * Spade — centered around origin, ~1.0 unit tall.
 * Classic spade blade with a sharp point at the top and flared stem at the bottom.
 */
export function createSpadeShape() {
  const shape = new THREE.Shape()
  // Start at the bottom-left corner of the flared base
  shape.moveTo(-0.25, -0.5)
  // Draw the flat bottom of the base
  shape.lineTo(0.25, -0.5)
  // Right side of stem: sweeping up and inwards to the center pinch point
  shape.bezierCurveTo(0.15, -0.45, 0.05, -0.25, 0.05, -0.15)
  // Right half of the spade blade
  shape.bezierCurveTo(0.7, -0.45, 0.5, 0.3, 0, 0.6)
  // Left half of the spade blade
  shape.bezierCurveTo(-0.5, 0.3, -0.7, -0.45, -0.05, -0.15)
  // Left side of stem: sweeping outwards and down to meet the wide base
  shape.bezierCurveTo(-0.05, -0.25, -0.15, -0.45, -0.25, -0.5)
  return shape
}

/**
 * Club — centered around origin, ~1.0 unit tall.
 * Three rounded lobes + a flared stem, drawn as one continuous path.
 */
export function createClubShape() {
  const shape = new THREE.Shape()
  // Start at the bottom-left corner with a much wider base
  shape.moveTo(-0.25, -0.5)
  // Draw the flat bottom of the base
  shape.lineTo(0.25, -0.5)
  // Right side of stem: sweeping up to a tight pinch point
  shape.bezierCurveTo(0.15, -0.45, 0.05, -0.25, 0.05, -0.1)
  // Right lobe: control points pushed WAY out to x=0.65 to make it perfectly round
  // Sweeps down first, out, then up to the top pinch point
  shape.bezierCurveTo(0.65, -0.35, 0.65, 0.35, 0.08, 0.15)
  // Top lobe: control points pushed far up and outward to create a fat semi-circle
  shape.bezierCurveTo(0.4, 0.75, -0.4, 0.75, -0.08, 0.15)
  // Left lobe: exact mirror of the right lobe
  shape.bezierCurveTo(-0.65, 0.35, -0.65, -0.35, -0.05, -0.1)
  // Left side of stem: sweeping down and outward to meet the wide base
  shape.bezierCurveTo(-0.05, -0.25, -0.15, -0.45, -0.25, -0.5)
  return shape
}