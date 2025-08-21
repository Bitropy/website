'use client'

import { useEffect, useRef } from 'react'

interface LatticeNode {
  x: number
  y: number
  z: number
  originalX: number
  originalY: number
  originalZ: number
  opacity: number
  size: number
}

interface Lattice {
  nodes: LatticeNode[]
  centerX: number
  centerY: number
  centerZ: number
  vx: number
  vy: number
  vz: number
  rotationX: number
  rotationY: number
  rotationZ: number
  rotationSpeedX: number
  rotationSpeedY: number
  rotationSpeedZ: number
  scale: number
  scaleSpeed: number
}

interface EntropyAnimationProps {
  className?: string
  latticeCount?: number
  width?: number
  height?: number
}

export default function EntropyAnimation({ 
  className = "",
  latticeCount = 3,
  width = 800,
  height = 600
}: EntropyAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const latticesRef = useRef<Lattice[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.offsetWidth
        canvas.height = container.offsetHeight
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 3D rotation functions
    const rotateX = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x,
        y: y * cos - z * sin,
        z: y * sin + z * cos
      }
    }

    const rotateY = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x * cos + z * sin,
        y: y,
        z: -x * sin + z * cos
      }
    }

    const rotateZ = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      return {
        x: x * cos - y * sin,
        y: x * sin + y * cos,
        z: z
      }
    }

    // Project 3D point to 2D screen coordinates
    const project3D = (x: number, y: number, z: number, distance: number = 800) => {
      const scale = distance / (distance + z)
      return {
        x: x * scale,
        y: y * scale,
        scale: scale
      }
    }

    // Create a 3D lattice pattern
    const createLattice = (centerX: number, centerY: number, centerZ: number): Lattice => {
      const nodes: LatticeNode[] = []
      const gridSize = 8 // 8x8x8 grid (bigger)
      const spacing = 80 // Larger spacing between nodes
      
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          for (let k = 0; k < gridSize; k++) {
            const x = (i - Math.floor(gridSize / 2)) * spacing
            const y = (j - Math.floor(gridSize / 2)) * spacing
            const z = (k - Math.floor(gridSize / 2)) * spacing
            
            nodes.push({
              x: centerX + x,
              y: centerY + y,
              z: centerZ + z,
              originalX: x,
              originalY: y,
              originalZ: z,
              opacity: Math.random() * 0.4 + 0.4,
              size: Math.random() * 6 + 4 // 4-10px
            })
          }
        }
      }
      
      return {
        nodes,
        centerX,
        centerY,
        centerZ,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 2,
        rotationSpeedX: (Math.random() - 0.5) * 0.005, // Slower rotation
        rotationSpeedY: (Math.random() - 0.5) * 0.005,
        rotationSpeedZ: (Math.random() - 0.5) * 0.005,
        scale: Math.random() * 0.3 + 0.7,
        scaleSpeed: (Math.random() - 0.5) * 0.001 // Slower scaling
      }
    }

    // Initialize lattices
    const initializeLattices = () => {
      const lattices: Lattice[] = []
      const currentWidth = canvas.width || width
      const currentHeight = canvas.height || height
      
      for (let i = 0; i < latticeCount; i++) {
        const centerX = Math.random() * currentWidth
        const centerY = Math.random() * currentHeight
        const centerZ = (Math.random() - 0.5) * 400 // Z depth
        lattices.push(createLattice(centerX, centerY, centerZ))
      }
      
      return lattices
    }
    
    const lattices = initializeLattices()
    latticesRef.current = lattices
    
    const animate = () => {
      // Clear canvas with subtle trail effect to create purple traces
      ctx.fillStyle = 'rgba(249, 250, 251, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lattices.forEach(lattice => {
        // Update lattice properties
        lattice.centerX += lattice.vx
        lattice.centerY += lattice.vy
        lattice.centerZ += lattice.vz
        lattice.rotationX += lattice.rotationSpeedX
        lattice.rotationY += lattice.rotationSpeedY
        lattice.rotationZ += lattice.rotationSpeedZ
        lattice.scale += lattice.scaleSpeed
        
        // Oscillate scale
        if (lattice.scale > 1.1 || lattice.scale < 0.6) {
          lattice.scaleSpeed *= -1
        }
        
        // Wrap around edges with 3D consideration
        if (lattice.centerX < -400) lattice.centerX = canvas.width + 400
        if (lattice.centerX > canvas.width + 400) lattice.centerX = -400
        if (lattice.centerY < -400) lattice.centerY = canvas.height + 400
        if (lattice.centerY > canvas.height + 400) lattice.centerY = -400
        if (lattice.centerZ < -600) lattice.centerZ = 600
        if (lattice.centerZ > 600) lattice.centerZ = -600

        // Transform nodes and store 2D positions
        const transformedNodes = lattice.nodes.map(node => {
          // Apply scale
          let x = node.originalX * lattice.scale
          let y = node.originalY * lattice.scale
          let z = node.originalZ * lattice.scale
          
          // Apply 3D rotations
          let rotated = rotateX(x, y, z, lattice.rotationX)
          x = rotated.x; y = rotated.y; z = rotated.z
          
          rotated = rotateY(x, y, z, lattice.rotationY)
          x = rotated.x; y = rotated.y; z = rotated.z
          
          rotated = rotateZ(x, y, z, lattice.rotationZ)
          x = rotated.x; y = rotated.y; z = rotated.z
          
          // Apply lattice position
          x += lattice.centerX
          y += lattice.centerY
          z += lattice.centerZ
          
          // Project to 2D
          const projected = project3D(x - canvas.width / 2, y - canvas.height / 2, z)
          
          return {
            screenX: projected.x + canvas.width / 2,
            screenY: projected.y + canvas.height / 2,
            depth: z,
            scale: projected.scale,
            node: node
          }
        })

        // Sort by depth for proper rendering
        transformedNodes.sort((a, b) => a.depth - b.depth)

        // Draw 3D grid connections
        const gridSize = 8
        ctx.strokeStyle = 'rgba(147, 51, 234, 0.2)'
        ctx.lineWidth = 0.8

        // Draw grid lines connecting adjacent nodes
        for (let i = 0; i < gridSize; i++) {
          for (let j = 0; j < gridSize; j++) {
            for (let k = 0; k < gridSize; k++) {
              const nodeIndex = i * gridSize * gridSize + j * gridSize + k
              const currentNode = transformedNodes[nodeIndex]
              
              if (!currentNode) continue

              // Connect to adjacent nodes (right, down, forward)
              if (i < gridSize - 1) {
                const rightIndex = (i + 1) * gridSize * gridSize + j * gridSize + k
                const rightNode = transformedNodes[rightIndex]
                if (rightNode) {
                  const opacity = Math.min(currentNode.scale, rightNode.scale) * 0.3
                  ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
                  ctx.beginPath()
                  ctx.moveTo(currentNode.screenX, currentNode.screenY)
                  ctx.lineTo(rightNode.screenX, rightNode.screenY)
                  ctx.stroke()
                }
              }
              
              if (j < gridSize - 1) {
                const downIndex = i * gridSize * gridSize + (j + 1) * gridSize + k
                const downNode = transformedNodes[downIndex]
                if (downNode) {
                  const opacity = Math.min(currentNode.scale, downNode.scale) * 0.3
                  ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
                  ctx.beginPath()
                  ctx.moveTo(currentNode.screenX, currentNode.screenY)
                  ctx.lineTo(downNode.screenX, downNode.screenY)
                  ctx.stroke()
                }
              }
              
              if (k < gridSize - 1) {
                const forwardIndex = i * gridSize * gridSize + j * gridSize + (k + 1)
                const forwardNode = transformedNodes[forwardIndex]
                if (forwardNode) {
                  const opacity = Math.min(currentNode.scale, forwardNode.scale) * 0.3
                  ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
                  ctx.beginPath()
                  ctx.moveTo(currentNode.screenX, currentNode.screenY)
                  ctx.lineTo(forwardNode.screenX, forwardNode.screenY)
                  ctx.stroke()
                }
              }
            }
          }
        }

        // Draw nodes
        transformedNodes.forEach(({ screenX, screenY, scale, node }) => {
          const nodeSize = node.size * scale
          const nodeOpacity = node.opacity * scale * 0.8
          
          if (nodeSize < 0.5 || nodeOpacity < 0.1) return // Skip very small/transparent nodes
          
          // Draw purple trace first (for trail effect)
          ctx.beginPath()
          ctx.arc(screenX, screenY, nodeSize + 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(147, 51, 234, ${nodeOpacity * 0.4})` // purple trace
          ctx.fill()
          
          // Draw black dot on top
          ctx.beginPath()
          ctx.arc(screenX, screenY, nodeSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 0, 0, ${nodeOpacity})` // black dot
          ctx.fill()
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [width, height, latticeCount])

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  )
}