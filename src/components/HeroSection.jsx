import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function HeroSection() {
  const canvasWrapperRef = useRef(null)

  useEffect(() => {
    const el = canvasWrapperRef.current
    if (!el) return

    const handleWheel = (event) => {
      // Allow pinch-to-zoom (Ctrl/Cmd+wheel on trackpads) to reach OrbitControls.
      // Block regular wheel/scroll events so the page scrolls normally.
      if (!event.ctrlKey && !event.metaKey) {
        event.stopPropagation()
      }
    }

    el.addEventListener('wheel', handleWheel, { capture: true })
    return () => el.removeEventListener('wheel', handleWheel, { capture: true })
  }, [])

  return (
    <section className="h-screen relative bg-black">
      {/* Background overlay — extends below the section for a seamless fade */}
      <div
        className="absolute inset-x-0 top-0 -bottom-[250px] bg-[url('/bg-gradient.png')] bg-cover bg-top bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* 3D Canvas wrapper — intercepts wheel events at capture phase */}
      <div
        ref={canvasWrapperRef}
        className="absolute inset-0 z-[1]"
      >
        <Canvas
          className="w-full h-full"
          camera={{ position: [0, 6, 10], fov: 45 }}
          gl={{ alpha: true }}
          shadows
        >
          <Scene />
        </Canvas>
      </div>

      {/* HTML UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-8 md:px-12 pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl text-center drop-shadow-lg">
          <span className="block font-serif">What if the impossible</span>
          <span className="block font-serif">
            was just an <span className="italic bg-gradient-to-r from-[#113B97] to-[#BFEEFF] bg-clip-text text-transparent">illusion</span>?
          </span>
        </h1>

        <p className="mt-6 font-sans font-semibold text-white text-sm md:text-base tracking-widest">
          Discover the magic
        </p>

        <img
          src="/down_arrow.png"
          alt="Scroll down"
          className="mt-6 h-12 w-auto animate-[bounce-slow_2s_ease-in-out_infinite]"
        />
      </div>
    </section>
  )
}
