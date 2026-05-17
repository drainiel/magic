import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function PhilosophySection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ['#5EBDE1', '#FFFFFF']
  )

  return (
    <section
      ref={ref}
      className="min-h-screen py-24 flex items-center justify-center bg-black"
    >
      <div className="max-w-4xl px-6 text-center">
        <motion.p
          style={{ color }}
          className="font-sans font-semibold text-3xl md:text-4xl leading-relaxed"
        >
          La nostra filosofia è quella di aiutare le Persone, Aziende e
          Istituzioni a realizzare l’impossibile. Con percorsi di Coaching
          finalizzati ad insegnare strategie di pensiero per realizzare
          l’impossibile nella vita di tutti i giorni. Oppure producendo per voi
          eventi spettacolari, comunicativi, straordinariamente impossibili.
        </motion.p>
      </div>
    </section>
  )
}
