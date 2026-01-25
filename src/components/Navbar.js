import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-gradient-to-b
        from-background/95
        via-surface/90
        to-surface/80
        backdrop-blur-md
        border-b border-border
        py-2 px-4 sm:px-6 lg:px-8
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/logo.png"
              alt="OniLabs logo"
              className="h-12 w-12 object-contain"
            />
            <a
              href="#"
              className="
                text-2xl font-bold
                bg-gradient-to-r from-primary to-accent
                bg-clip-text text-transparent
              "
            >
              OniLabs
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a
              href="#servicios"
              className="text-text-secondary hover:text-primary transition"
            >
              Especialidades
            </a>
            <a
              href="#portafolio"
              className="text-text-secondary hover:text-primary transition"
            >
              Repositorio
            </a>
            <a
              href="#proceso"
              className="text-text-secondary hover:text-primary transition"
            >
              Metodología
            </a>
            <a
              href="#equipo"
              className="text-text-secondary hover:text-primary transition"
            >
              Colaboradores
            </a>

            <a
              href="#contactanos"
              className="
                bg-primary text-white
                px-6 py-2 rounded-lg font-bold
                hover:bg-primary-dark
                transition
              "
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-text-primary"
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className="
              md:hidden absolute top-full left-0 w-full
              bg-surface/95 backdrop-blur-md
              border-t border-border
              shadow-xl py-4 space-y-4
            "
          >
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
              Metodología
            </a>
            <a
              href="#equipo"
              className="block px-6 text-text-secondary hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Colaboradores
            </a>
            <a
              href="#contactanos"
              className="
                block mx-6
                bg-primary text-white
                px-6 py-2 rounded-lg text-center font-bold
                hover:bg-primary-dark transition
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
