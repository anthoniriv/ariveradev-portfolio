import { servicios } from "../data/onilabs";

export default function Services() {
  return (
    <section id="servicios" className="py-14 px-8 sm:px-6 lg:px-16">
      <div
        className="
          max-w-9xl bg-baseEsp mx-auto rounded-3xl
          px-4 py-10
          sm:px-10 sm:py-14
          lg:px-32 lg:py-20
        "
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            Nuestras Especialidades
          </h2>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="
                bg-background text-center
                border border-border rounded-3xl
                p-5 sm:p-6
                shadow-sm
                transition-all duration-150 ease-out
                hover:shadow-xl
                hover:border-primary/40
              "
            >
              <div className="text-4xl mb-4">
                {servicio.icono}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-text-primary">
                {servicio.titulo}
              </h3>

              <p className="text-sm sm:text-base text-text-secondary">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
