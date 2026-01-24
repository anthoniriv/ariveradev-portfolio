import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Imagen de Fondo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: "url('/fondoHero.png')",
          filter: "brightness(0.5)" 
        }} 
      />

      {/* Overlay Radial (Vignette) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)]" />
      
      {/* Overlay de color extra */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        
       

        {/* Título Principal */}
        <h1 className="text-5xl sm:text-6xl lg:text-[5.4rem] font-black leading-[1.1] tracking-tight text-white mb-6">
          Construimos software <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
            para negocios reales
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Desde microservicios hasta integraciones complejas. 
          Creamos soluciones <span className="text-white font-semibold">tecnológicas robustas</span> que impulsan tu crecimiento digital.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#contactanos"
            className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <span className="relative z-10">Agenda una llamada</span>
          </a>

          <a
            href="#portafolio"
            className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all hover:border-white/40"
          >
            Ver repositorio
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  );
}