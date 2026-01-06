import { servicios } from "../data/onilabs";

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Nuestros Servicios
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para impulsar tu negocio digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-background border border-border rounded-xl p-6 shadow-sm hover:border-primary hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{servicio.icono}</div>
              <h3 className="text-xl font-semibold mb-3 text-text-primary">{servicio.titulo}</h3>
              <p className="text-text-secondary mb-4">{servicio.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {servicio.tecnologias.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-primary-soft text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
