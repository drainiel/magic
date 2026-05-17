export default function Footer() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'Contatti', href: '#' },
    { label: 'Sitemap', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Politica Aziendale', href: '#' },
  ]

  return (
    <footer className="relative pt-32 md:pt-40 pb-8 md:pb-12 px-8 md:px-12">
      {/* Full-width background overlay */}
      <div
        className="absolute inset-x-0 -top-[300px] bottom-0 bg-[url('/footer-bg.png')] bg-cover bg-top bg-no-repeat z-0"
        aria-hidden="true"
      />

      {/* Content sits above the overlay */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between gap-6 md:gap-12">
        {/* Left Section: Logo & Mission */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img
            src="/footer-logo.png"
            alt="CO2 emission zero website"
            className="w-10 md:w-14 flex-shrink-0"
          />
          <p className="font-serif text-[10px] leading-relaxed text-white/80 max-w-[400px] lg:max-w-[480px]">
            La nostra azienda rispetta l'ambiente; lavoriamo costantemente insieme ai nostri clienti e ai nostri fornitori per avere un impatto positivo sull'ambiente spostando online gran parte delle attività e risparmiando sempre più CO2.
          </p>
        </div>

        {/* Right Section: Company Info & Links */}
        <div className="flex flex-col gap-1 md:text-right">
          <p className="font-serif text-[10px] text-white/80">
            LOOP MEDIA NETWORK srl | Via Rochemolles 6 | 10146 Torino | <span className="whitespace-nowrap">P.IVA 10884090019</span>
          </p>
          <nav className="flex flex-wrap md:justify-end gap-x-1 font-serif text-[11px] text-white/80">
            {links.map((link, index) => (
              <span key={link.label} className="inline-flex items-center">
                <a
                  href={link.href}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
                {index < links.length - 1 && (
                  <span className="ml-1">-</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
