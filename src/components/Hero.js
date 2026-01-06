export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-text via-primary to-secondary bg-clip-text text-transparent">
          Construimos software escalable para negocios reales
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
          Desarrollo web, aplicaciones móviles, microservicios, integraciones y ecommerce WordPress/WooCommerce.
          Soluciones tecnológicas que escalan con tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-105"
          >
            Agenda una llamada
          </a>
          <a
            href="#proyectos"
            className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/10 transition-all transform hover:scale-105"
          >
            Ver proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
