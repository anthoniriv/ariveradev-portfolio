import { useState } from "react";
import { links } from "../data/onilabs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Onilabs
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-text-secondary hover:text-primary transition-colors">
              Especialidades
            </a>
            {/* <a href="#proyectos" className="text-text-secondary hover:text-primary transition-colors">
              Ejemplos
            </a> */}
            <a href="#portafolio" className="text-text-secondary hover:text-primary transition-colors">
              Repositorio
            </a>
            <a href="#proceso" className="text-text-secondary hover:text-primary transition-colors">
              Metodologia
            </a>
            <a href="#equipo" className="text-text-secondary hover:text-primary transition-colors">
              Colaboradores
            </a>
            <a
              href="#contacto"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark hover:shadow-md transition-all"
            >
              Contactanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary transition-colors"
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
            <a href="#servicios" className="block text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Especialidades
            </a>
            {/* <a href="#proyectos" className="block text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Repositorio
            </a> */}
            <a href="#portafolio" className="block text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Repositorio
            </a>
            <a href="#proceso" className="block text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Metodologia
            </a>
            <a href="#equipo" className="block text-text-secondary hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Colaboradores
            </a>
            
            <a
              href="#contacto"
              className="block bg-primary text-white px-6 py-2 rounded-lg text-center hover:bg-primary-dark hover:shadow-md transition-all"
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
