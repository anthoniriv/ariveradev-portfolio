"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { proyectosReales } from "../data/onilabs";

export default function Portfolio() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const proyectosLoop = [...proyectosReales, ...proyectosReales];

  const autoScroll = () => {
    const slider = sliderRef.current;
    if (!slider || isDragging.current) return;
    const half = slider.scrollWidth / 2;
    slider.scrollLeft += 0.6;
    if (slider.scrollLeft >= half) slider.scrollLeft -= half;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    stopAutoScroll();
    startX.current = e.clientX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const slider = sliderRef.current;
    const half = slider.scrollWidth / 2;
    const dx = e.clientX - startX.current;
    let next = scrollStart.current - dx;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    slider.scrollLeft = next;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    startAutoScroll();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft = slider.scrollWidth / 4;
    startAutoScroll();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section id="portafolio" className="relative bg-background py-20">
      <div className="mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Repositorio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Proyectos reales que hemos desarrollado para nuestros clientes
          </p>
        </div>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="flex gap-8 overflow-x-scroll px-4 py-10 cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
              <div className="rounded-xl overflow-hidden border border-border bg-background transition-all hover:border-primary hover:shadow-xl">
                
                {/* Imagen */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    sizes="(max-width: 768px) 80vw, 780px"
                    className="object-cover"
                  />
                </div>

                {/* Barra blanca inferior */}
                <div className="bg-white px-6 py-4">
                  <a
                    href={proyecto.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (hasDragged.current) e.preventDefault();
                    }}
                    className="block text-xl font-semibold text-text-primary hover:text-primary transition-colors"
                  >
                    {proyecto.nombre}
                  </a>

                  <p className="mt-1 text-sm text-text-secondary">
                    {proyecto.descripcion}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
