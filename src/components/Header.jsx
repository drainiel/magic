import { Link } from 'react-router-dom'

export default function Header() {
  const links = [
    { label: 'Eventi e Comunicazioni', href: '#' },
    { label: 'Tv Shows', href: '#' },
    { label: 'Formazioni', href: '#' },
    { label: 'Artisti', href: '/artisti' },
    { label: 'Contatti', href: '/contatti' },
    { label: 'Rassegna Stampa', href: '#' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent px-8 md:px-12 py-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
        <Link to="/" className="flex-shrink-0 -my-9 relative z-10">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.href.startsWith('/') ? (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-white text-sm tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-white text-sm tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        </div>
      </div>
    </header>
  )
}
