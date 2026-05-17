import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Eventi e Comunicazioni', href: '#' },
    { label: 'Tv Shows', href: '#' },
    { label: 'Formazioni', href: '#' },
    { label: 'Artisti', href: '/artisti' },
    { label: 'Contatti', href: '/contatti' },
    { label: 'Rassegna Stampa', href: '#' },
  ]

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-transparent px-8 md:px-12 py-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 -my-9 relative z-10">
              <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>

            {/* Desktop Navigation */}
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

            {/* Mobile Hamburger */}
            <button
              className="md:hidden relative z-10 flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex flex-col px-8 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex-shrink-0 -my-9 relative z-10"
            >
              <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
            </Link>
            <button
              className="relative z-10 flex flex-col justify-center items-center w-8 h-8"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="block w-6 h-[2px] bg-white rotate-45 absolute" />
              <span className="block w-6 h-[2px] bg-white -rotate-45 absolute" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-white text-xl tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-200"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-white text-xl tracking-wide opacity-90 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </>
  )
}
