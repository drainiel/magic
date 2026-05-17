import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhilosophySection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center center'],
  })

  const line1Reveal = useTransform(scrollYProgress, [0, 0.33], [100, 0])
  const line2Reveal = useTransform(scrollYProgress, [0.33, 0.66], [100, 0])
  const line3Reveal = useTransform(scrollYProgress, [0.66, 1], [100, 0])

  const line1Clip = useTransform(line1Reveal, (v) => `inset(0 ${v}% 0 0)`)
  const line2Clip = useTransform(line2Reveal, (v) => `inset(0 ${v}% 0 0)`)
  const line3Clip = useTransform(line3Reveal, (v) => `inset(0 ${v}% 0 0)`)

  const lines = [
    {
      text: "La nostra filosofia è quella di aiutare le Persone, Aziende e Istituzioni a realizzare l'impossibile.",
      clip: line1Clip,
    },
    {
      text: "Con percorsi di Coaching finalizzati ad insegnare strategie di pensiero per realizzare l'impossibile nella vita di tutti i giorni.",
      clip: line2Clip,
    },
    {
      text: 'Oppure producendo per voi eventi spettacolari, comunicativi, straordinariamente impossibili.',
      clip: line3Clip,
    },
  ]

  return (
    <section
      ref={ref}
      className="min-h-screen pt-16 pb-24 px-8 md:px-12 w-full bg-black"
    >
      <div className="max-w-6xl mx-auto w-full text-left">
        <p className="font-serif text-white text-lg md:text-2xl mt-4">
          {lines.map((line, i) => (
            <span key={i} className="block relative">
              <span className="block" style={{ color: '#5EBDE1' }}>
                {line.text}
              </span>
              <motion.span
                className="block absolute inset-0"
                style={{ clipPath: line.clip, color: '#FFFFFF' }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
