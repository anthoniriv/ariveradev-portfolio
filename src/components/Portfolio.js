"use client";

import Image from "next/image";
import { proyectosReales } from "../data/onilabs";
import { useEffect, useRef } from "react";

export default function Portfolio() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  const proyectosLoop = [...proyectosReales, ...proyectosReales];

  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    intervalRef.current = setInterval(() => {
      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, 20);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section
      id="portafolio"
      className="bg-background py-20 "
    >
      <div className="mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Portafolio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Proyectos reales que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div
          ref={sliderRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="flex gap-8 overflow-x-scroll py-10 px-2 cursor-pointer"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {proyectosLoop.map((proyecto, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[780px]"
            >
              <a
                href={proyecto.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-border rounded-lg overflow-hidden bg-background hover:border-primary transition-all"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 80vw, 400px"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {proyecto.nombre}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {proyecto.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
