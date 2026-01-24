"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { proyectosReales } from "../data/onilabs";

export default function Portfolio() {
  /* =========================
     Refs
  ========================= */
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const isDragging = useRef(false);
  const isInteracting = useRef(false);
  const hasDragged = useRef(false);

  const startX = useRef(0);
  const scrollStart = useRef(0);

  /* =========================
     Data
  ========================= */
  const proyectosLoop = [...proyectosReales, ...proyectosReales];

  /* =========================
     Auto scroll
  ========================= */
  const autoScroll = () => {
    const slider = sliderRef.current;
    if (!slider || isInteracting.current || isDragging.current) return;

    slider.scrollLeft += 0.6;

    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };

  /* =========================
     Mouse events
  ========================= */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    isInteracting.current = true;
    hasDragged.current = false;

    stopAutoScroll();

    startX.current = e.pageX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const walk = e.pageX - startX.current;

    if (Math.abs(walk) > 5) {
      hasDragged.current = true;
    }

    sliderRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    isInteracting.current = false;
    startAutoScroll();
  };

  const handleMouseLeave = () => {
    if (!isDragging.current) return;

    isDragging.current = false;
    isInteracting.current = false;
    startAutoScroll();
  };

  /* =========================
     Infinite scroll fix
  ========================= */
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += slider.scrollWidth / 2;
    } else if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    }
  };

  /* =========================
     Lifecycle
  ========================= */
  useEffect(() => {
    startAutoScroll();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  /* =========================
     Render
  ========================= */
  return (
    <section id="portafolio" className="relative bg-background py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl md:text-5xl">
            Repositorio
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Proyectos reales que hemos desarrollado para nuestros clientes
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onScroll={handleScroll}
          className="
            flex gap-8 overflow-x-scroll px-4 py-10
            cursor-grab active:cursor-grabbing
            select-none scroll-smooth
          "
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
              <div
                className="
                  rounded-xl overflow-hidden
                  border border-border bg-background
                  transition-all
                  hover:border-primary hover:shadow-xl
                "
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    sizes="(max-width: 768px) 80vw, 780px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-5">
                    <div>
                      {/* Título (único link) */}
                      <a
                        href={proyecto.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (hasDragged.current) e.preventDefault();
                        }}
                        className="
                          inline-block text-lg font-semibold
                          text-white
                          hover:text-primary transition-colors
                          drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]
                          [text-shadow:0_0_3px_rgba(0,0,0,0.9)]
                        "
                      >
                        {proyecto.nombre}
                      </a>

                      <p className="mt-1 text-sm text-text-secondary">
                        {proyecto.descripcion}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
