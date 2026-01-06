import Image from "next/image";
import { proyectosReales } from "../data/onilabs";

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Portafolio
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Proyectos reales que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          {proyectosReales.map((proyecto) => (
            <div key={proyecto.id} className="basis-1/3 flex-1 group">
              {proyecto.url ? (
                <a
                  href={proyecto.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg border border-border hover:border-primary transition-all hover:shadow-md"
                >
                  <div className="relative w-full aspect-video">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      fill
                      className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
                      <div>
                        <h3 className="text-text-primary font-semibold text-lg">{proyecto.nombre}</h3>
                        <p className="text-text-secondary text-sm">{proyecto.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative overflow-hidden rounded-lg border border-border shadow-sm">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={proyecto.imagen}
                      alt={proyecto.nombre}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent rounded-lg flex items-end p-4">
                      <div>
                        <h3 className="text-text-primary font-semibold text-lg">{proyecto.nombre}</h3>
                        <p className="text-text-secondary text-sm">{proyecto.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
