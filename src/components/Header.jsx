export default function Header() {
  const links = [
    'Eventi e Comunicazioni',
    'Tv Shows',
    'Formazioni',
    'Artisti',
    'Contatti',
    'Rassegna Stampa',
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-8 md:px-12 py-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 -my-9 relative z-10">
          <img src="/logo.png" alt="Logo" className="h-30 w-auto" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              className="font-sans text-white text-sm tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
