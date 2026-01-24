"use client";

import Image from "next/image";
import { proyectosReales } from "../data/onilabs";
import { useEffect, useRef } from "react";

export default function Portfolio() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const isDragging = useRef(false);
  const isInteracting = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasDragged = useRef(false);

  const proyectosLoop = [...proyectosReales, ...proyectosReales];

  /* ---------------- AUTO SCROLL ---------------- */
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

  /* ---------------- DRAG ---------------- */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    isInteracting.current = true;

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
    if (isDragging.current) {
      isDragging.current = false;
      isInteracting.current = false;
      startAutoScroll();
    }
  };

  /* ---------------- LOOP INFINITO ---------------- */
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft <= 0) {
      slider.scrollLeft += slider.scrollWidth / 2;
    } else if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft -= slider.scrollWidth / 2;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section id="portafolio" className="bg-background py-20 relative">
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
          onScroll={handleScroll}
          className="
            flex gap-8 overflow-x-scroll py-10 px-4
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
              <a
                href={proyecto.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (hasDragged.current) {
                    e.preventDefault();
                  }
                }}
                className="
                  block border border-border rounded-xl overflow-hidden
                  bg-background transition-all
                  hover:border-primary hover:shadow-xl
                "
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 780px"
                  />

                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-transparent to-transparent p-5">
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
