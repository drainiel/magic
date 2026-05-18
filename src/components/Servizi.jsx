import ServiceCard from './ServiceCard'
import eventiImg from '../assets/services-imgs/eventi.png'
import coachingImg from '../assets/services-imgs/coaching.png'
import tvshowsImg from '../assets/services-imgs/tvshows.png'

export default function Servizi() {
  return (
    <section className="w-full bg-black px-8 md:px-12 pb-24">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="font-serif text-[#3DB4F8] text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-14">
          I nostri servizi
        </h2>

        <ServiceCard
          number="530+"
          title="EVENTI & COMUNICAZIONE"
          description="Grandi spettacoli live su misura, per soddisfare le esigenze di comunicazione del cliente. Lo spettacolo diventa un mezzo per veicolare messaggi e gli artisti, il significante della comunicazione. Ad ogni artista è associata un'emozione. Ad ogni emozione un valore del brand."
          image={eventiImg}
        />

        <ServiceCard
          number="530+"
          title="COACHING & FORMAZIONI"
          description="Realizzare l'impossibile si può. E Masters of Magic insegna la metodologia per riuscirci. Sviluppata dal pool coordinato dallo Psichiatra Matteo Rampin, la Think Strange® Philosophy, ha una solida base scientifica che vuole i messaggi formativi veicolati attraverso veri momenti di spettacolo, costruiti ad hoc sulle esigenze del cliente."
          image={coachingImg}
        />

        <ServiceCard
          number="320+"
          title="TV SHOWS"
          description="Realizzazione di tutti i principali programmi di magia in onda in Italia su Rai, Mediaset e Sky degli ultimi 10 anni. I programmi di Masters of Magic hanno sempre superato lo share di rete, confermando il successo della sua filosofia: rinnovare millenni di arte magica per creare spettacoli unici e innovativi."
          image={tvshowsImg}
        />
      </div>
    </section>
  )
}
