import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-surface border-t border-border py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              Onilabs
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-text-secondary hover:text-primary">
              Especialidades
            </a>
            <a href="#portafolio" className="text-text-secondary hover:text-primary">
              Repositorio
            </a>
            <a href="#proceso" className="text-text-secondary hover:text-primary">
              Metodologia
            </a>
            <a href="#equipo" className="text-text-secondary hover:text-primary">
              Colaboradores
            </a>
            <a
              href="#contacto"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
            >
              Contactanos
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface shadow-lg py-4 space-y-4">
            <a
              href="#servicios"
              className="block px-6 text-text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Especialidades
            </a>
            <a
              href="#portafolio"
              className="block px-6 text-text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Repositorio
            </a>
            <a
              href="#proceso"
              className="block px-6 text-text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </a>
            <a
              href="#equipo"
              className="block px-6 text-text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Colaboradores
            </a>
            <a
              href="#contacto"
              className="block mx-6 bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-primary-dark transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactanos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
