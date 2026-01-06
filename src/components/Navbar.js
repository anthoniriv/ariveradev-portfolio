import { useState } from "react";
import { links } from "../data/onilabs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Onilabs
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-text hover:text-accent transition-colors">
              Servicios
            </a>
            <a href="#proyectos" className="text-text hover:text-accent transition-colors">
              Proyectos
            </a>
            <a href="#portafolio" className="text-text hover:text-accent transition-colors">
              Portafolio
            </a>
            <a href="#proceso" className="text-text hover:text-accent transition-colors">
              Proceso
            </a>
            <a href="#equipo" className="text-text hover:text-accent transition-colors">
              Equipo
            </a>
            <a href="#contacto" className="text-text hover:text-accent transition-colors">
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Agenda una llamada
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#servicios" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Servicios
            </a>
            <a href="#proyectos" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
            <a href="#portafolio" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Portafolio
            </a>
            <a href="#proceso" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Proceso
            </a>
            <a href="#equipo" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Equipo
            </a>
            <a href="#contacto" className="block text-text hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
            <a
              href="#contacto"
              className="block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg text-center hover:shadow-lg hover:shadow-primary/50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda una llamada
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
