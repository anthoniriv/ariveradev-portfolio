export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-b from-background to-surface">
      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-96 h-96 bg-primary-soft/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-accent-soft/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-primary-soft/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
          leading-[1.15] pb-3
          bg-gradient-to-r from-primary via-primary-dark to-accent
          bg-clip-text text-transparent">
          Construimos software escalable para negocios reales
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mt-8 mb-10 max-w-3xl mx-auto leading-relaxed">
          Desarrollo web, aplicaciones móviles, microservicios, integraciones y ecommerce WordPress/WooCommerce.
          <br className="hidden sm:block" />
          Soluciones tecnológicas que escalan con tu negocio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contacto"
            className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold
              hover:bg-primary-dark hover:shadow-lg
              transition-all duration-300 hover:-translate-y-0.5"
          >
            Agenda una llamada
          </a>

          <a
            href="#proyectos"
            className="border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold
              hover:bg-primary-soft transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
