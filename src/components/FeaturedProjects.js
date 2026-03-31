"use client";

import Image from "next/image";
import Link from "next/link";
import { proyectosReales } from "../data/onilabs";

export default function FeaturedProjects() {
  return (
    <section id="proyectos" className="w-full bg-background py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Nuestro trabajo
          </p>
          <h2 className="mb-4 text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Repositorio
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-text-secondary leading-relaxed">
            Proyectos reales que hemos desarrollado para nuestros clientes
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosReales.slice(0, 3).map((proyecto) => (
            <article
              key={proyecto.id}
              className="bg-white rounded-2xl border border-border overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-base ease-out-expo"
              style={{ boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)" }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface border-b border-border">
                <Image
                  src={proyecto.imagen}
                  alt={proyecto.nombre}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">
                  {proyecto.nombre}
                </h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                  {proyecto.descripcion}
                </p>
                <div>
                  <a
                    href={proyecto.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-text-secondary text-sm font-medium py-2 px-5 rounded-md transition-colors duration-fast ease-out-expo"
                    style={{ background: "#E2E8F0" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#CBD5E1")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#E2E8F0")}
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/proyectos"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-12 rounded-full transition-colors duration-fast ease-out-expo text-sm uppercase tracking-wider inline-block"
            style={{ boxShadow: "0 4px 14px 0 rgba(37,99,235,0.39)" }}
          >
            Ver más proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
