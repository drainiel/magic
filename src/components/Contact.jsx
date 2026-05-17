import { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import Header from './Header'
import Footer from './Footer'
import TextInput from './TextInput'
import Button from './Button'

export default function Contact() {
    const [formData, setFormData] = useState({
        nome: '',
        cognome: '',
        email: '',
        oggetto: '',
        messaggio: '',
    })

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

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
        <div className="w-full bg-black overflow-x-hidden">
            <Header />
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
                        <span className="block font-serif">
                            get in <span className="italic bg-gradient-to-r from-[#113B97] to-[#BFEEFF] bg-clip-text text-transparent">touch</span>
                        </span>
                    </h1>

                    <p className="mt-6 font-sans font-semibold text-white text-sm md:text-base tracking-widest">
                        Fill the form below
                    </p>

                    <img
                        src="/down_arrow.png"
                        alt="Scroll down"
                        className="mt-6 h-12 w-auto animate-[bounce-slow_2s_ease-in-out_infinite]"
                    />
                </div>
            </section>

            <section className="relative z-10 py-16 px-8 md:px-12 text-left text-white w-full">
                <div className="max-w-6xl mx-auto w-full">
                    <p className="font-serif text-white text-lg md:text-2xl mt-4">
                        Usa il form per qualsiasi domanda. Ti contatteremo al più presto.<br />
                        Clicca il bottone qui sotto per iscriverti alla nostra newsletter e rimanere aggiornato su tutti i nostri appuntamenti.
                    </p>

                    <form className="mt-10 flex flex-col gap-6">
                        <div className="flex justify-between">
                            <TextInput
                                label="Nome"
                                size="half"
                                value={formData.nome}
                                onChange={(e) => handleChange('nome', e.target.value)}
                            />
                            <TextInput
                                label="Cognome"
                                size="half"
                                value={formData.cognome}
                                onChange={(e) => handleChange('cognome', e.target.value)}
                            />
                        </div>

                        <TextInput
                            label="Email"
                            size="full"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />

                        <TextInput
                            label="Oggetto"
                            size="full"
                            value={formData.oggetto}
                            onChange={(e) => handleChange('oggetto', e.target.value)}
                        />

                        <TextInput
                            label="Messaggio"
                            size="multiline"
                            value={formData.messaggio}
                            onChange={(e) => handleChange('messaggio', e.target.value)}
                        />

                        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-8">
                            <Button
                                label="Iscriviti alla newsletter"
                                variant="solid"
                                onClick={() => {}}
                            />
                            <Button
                                label="Invia messaggio"
                                variant="primary"
                                onClick={() => {}}
                            />
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}
