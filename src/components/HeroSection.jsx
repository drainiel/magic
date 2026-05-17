import { Canvas } from '@react-three/fiber'
import Scene from './Scene'

export default function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden bg-black bg-[url('/bg-gradient.png')] bg-cover bg-top bg-no-repeat">
      {/* 3D Canvas — explicit style ensures it fills the viewport */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        camera={{ position: [0, 6, 10], fov: 45 }}
        gl={{ alpha: true }}
        shadows
      >
        <Scene />
      </Canvas>

      {/* HTML UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl text-center drop-shadow-lg">
          <span className="block font-serif">What if the impossible</span>
          <span className="block font-serif">
            was just an <span className="italic bg-gradient-to-r from-[#113B97] to-[#BFEEFF] bg-clip-text text-transparent">illusion</span>?
          </span>
        </h1>

        <p className="mt-6 font-sans font-semibold text-white text-sm md:text-base tracking-widest uppercase">
          discover the magic
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
