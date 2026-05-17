import Header from './Header'
import Footer from './Footer'
import BorderGlow from './BorderGlow'
import walter from '../assets/artist/walter.png'
import shinLim from '../assets/artist/shin-lim.png'

const artists = [
  { name: 'David Copperfield', image: "https://picsum.photos/seed/artist2/400/500" },
  { name: 'Dynamo', image: 'https://picsum.photos/seed/artist2/400/500' },
  { name: 'Lu Chen', image: 'https://picsum.photos/seed/artist3/400/500' },
  { name: 'Luis De Matos', image: 'https://picsum.photos/seed/artist4/400/500' },
  { name: 'Mago Forest', image: 'https://picsum.photos/seed/artist5/400/500' },
  { name: 'Paul Wilson', image: 'https://picsum.photos/seed/artist6/400/500' },
  { name: 'Shin Lim', image: 'https://picsum.photos/seed/artist7/400/500' },
  { name: 'Uri Geller', image: 'https://picsum.photos/seed/artist8/400/500' },
  { name: 'Juan Tamariz', image: 'https://picsum.photos/seed/artist9/400/500' },
  { name: 'Raul Cremona', image: 'https://picsum.photos/seed/artist10/400/500' },
  { name: 'Franz Harary', image: 'https://picsum.photos/seed/artist11/400/500' },
  { name: 'Xavier Mortimer', image: 'https://picsum.photos/seed/artist12/400/500' },
]

export default function Artisti() {
  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] bg-black pt-32 pb-6 px-8 md:px-12 flex flex-col justify-end">
        {/* Background overlay — aspect-ratio lock so the full PNG fade is visible */}
        <div
          className="absolute inset-x-0 top-0 bg-[url('/bg-gradient.png')] bg-cover bg-top bg-no-repeat z-0"
          style={{ paddingTop: '91%' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <h1 className="font-serif italic text-white text-6xl md:text-8xl lg:text-9xl">
            Artisti
          </h1>
          <p className="font-serif text-white text-lg md:text-2xl mt-4">
            Masters of Magic: i migliori artisti della scena mondiale
          </p>
        </div>
      </section>

      {/* Body text */}
      <section className="relative z-10 px-8 md:px-12 pt-8 pb-12 max-w-6xl mx-auto">
        <p className="font-sans text-white text-sm md:text-base leading-relaxed mb-6">
          Masters of Magic ha più di 1350 artisti internazionali nel suo network: l’eccellenza mondiale
          dell’illusionismo e della prestigiazione. Dal 2006 Masters of Magic seleziona le performance
          artistiche più affascinanti e all’avanguardia per rendere stupefacenti trasmissioni televisive,
          eventi di comunicazione, convention, trade show, spot televisivi e attacchi di guerrilla marketing.
        </p>
        <p className="font-sans text-white text-sm md:text-base leading-relaxed mb-6">
          Il punto di forza di Masters of Magic sta proprio nella sua grande esperienza consulenziale che
          permette di suggerire gli artisti più adatti alle vostre esigenze di comunicazione e spettacolo
          ottimizzando il vostro investimento e contemporaneamente la resa del vostro evento.
        </p>
        <p className="font-sans text-white text-sm md:text-base leading-relaxed">
          Masters of Magic detiene due Guinnes dei primati. Uno per aver organizzato lo spettacolo di
          magia più grande del mondo con 134 prestigiatori maghi nello stesso show e il secondo per aver
          organizzato l’evento di magia più grande di sempre, con più di 5000 maghi provenienti da ogni
          parte del pianeta.
        </p>
      </section>

      {/* Artist grid */}
      <section className="relative z-10 px-8 md:px-12 pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <BorderGlow
              key={artist.name}
              animated={true}
              colors={['#113B97', '#5EBDE1', '#BFEEFF']}
              backgroundColor="#0a0a12"
              borderRadius={20}
              glowRadius={30}
              glowColor="200 80 80"
              glowIntensity={0.8}
            >
              <div className="relative w-full aspect-[3/4]">
                <img
                  src={shinLim}
                  alt={artist.name}
                  className="absolute inset-0 w-full h-full object-cover object-bottom"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-serif text-white text-xl md:text-2xl">
                    {artist.name}
                  </span>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
