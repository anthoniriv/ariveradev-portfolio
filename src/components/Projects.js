import { proyectosEjemplo } from "../data/onilabs";

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text">
            Ejemplos de Proyectos
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Proyectos reales que demuestran nuestra capacidad de entregar soluciones de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosEjemplo.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-surface border border-surface rounded-xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3 text-text">{proyecto.titulo}</h3>
              <p className="text-muted mb-4 text-sm">
                <span className="font-semibold text-accent">Objetivo:</span> {proyecto.objetivo}
              </p>
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted mb-2">Stack tecnológico:</p>
                <div className="flex flex-wrap gap-2">
                  {proyecto.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded border border-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-text">
                <span className="font-semibold text-primary">Resultado:</span> {proyecto.resultado}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
