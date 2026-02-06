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
  const startY = useRef(0);
  const scrollStart = useRef(0);
  const directionLocked = useRef(null);
  const prefersReducedMotion = useRef(false);
  const proyectosLoop = [...proyectosReales, ...proyectosReales];

  const DRAG_THRESHOLD = 5;
  const DIRECTION_LOCK_THRESHOLD = 8;

  const autoScroll = () => {
    const slider = sliderRef.current;
    if (!slider || isDragging.current) return;
    const half = slider.scrollWidth / 2;
    slider.scrollLeft += 0.6;
    if (slider.scrollLeft >= half) slider.scrollLeft -= half;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const startAutoScroll = () => {
    if (prefersReducedMotion.current) return;
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const stopAutoScroll = () => {
    cancelAnimationFrame(animationRef.current);
  };

  const applyScroll = (dx) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const half = slider.scrollWidth / 2;
    let next = scrollStart.current - dx;
    if (next < 0) next += half;
    if (next >= half) next -= half;
    if (Math.abs(dx) > DRAG_THRESHOLD) hasDragged.current = true;
    slider.scrollLeft = next;
  };

  // --- Mouse handlers (desktop) ---
  const handleMouseDown = (e) => {
    isDragging.current = true;
    hasDragged.current = false;
    stopAutoScroll();
    startX.current = e.clientX;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    applyScroll(e.clientX - startX.current);
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

  // --- Touch handlers (mobile) ---
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    isDragging.current = true;
    hasDragged.current = false;
    directionLocked.current = null;
    stopAutoScroll();
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    scrollStart.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX.current;
    const dy = touch.clientY - startY.current;

    // Lock direction on first significant movement
    if (directionLocked.current === null) {
      if (Math.abs(dx) < DIRECTION_LOCK_THRESHOLD && Math.abs(dy) < DIRECTION_LOCK_THRESHOLD) return;
      directionLocked.current = Math.abs(dx) >= Math.abs(dy) ? "horizontal" : "vertical";
    }

    // Vertical gesture: release to native scroll
    if (directionLocked.current === "vertical") {
      isDragging.current = false;
      startAutoScroll();
      return;
    }

    // Horizontal gesture: prevent page scroll, handle drag
    e.preventDefault();
    applyScroll(dx);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    directionLocked.current = null;
    startAutoScroll();
  };

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const slider = sliderRef.current;
    if (!slider) return;
    slider.scrollLeft = slider.scrollWidth / 4;

    // Passive: false needed so horizontal touchmove can call preventDefault
    slider.addEventListener("touchmove", handleTouchMove, { passive: false });

    startAutoScroll();
    return () => {
      cancelAnimationFrame(animationRef.current);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section id="portafolio" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto">
        <div className="mb-12 text-center px-4">
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

        {/* Drag hint */}
        <div className="flex items-center justify-center gap-2 mb-6 text-text-muted text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          <span>Arrastra para explorar</span>
        </div>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-6 sm:gap-8 overflow-x-scroll px-4 py-6 cursor-grab active:cursor-grabbing select-none touch-pan-y"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          role="region"
          aria-label="Carrusel de proyectos"
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {proyectosLoop.map((proyecto, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[340px] lg:min-w-[780px] flex-shrink-0"
            >
              <div className="group rounded-2xl overflow-hidden border border-border bg-background transition-all duration-base ease-out-expo hover:border-primary/40 hover:shadow-xl hover:shadow-primary/8">
                {/* Image with hover overlay */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    fill
                    sizes="(max-width: 768px) 80vw, 780px"
                    className="object-cover transition-transform duration-slow ease-out-expo group-hover:scale-[1.05]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-base ease-out-expo flex items-end p-6">
                    <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-base ease-out-expo">
                      Ver proyecto
                    </span>
                  </div>
                </div>

                {/* Info bar */}
                <div className="bg-white px-6 py-4 flex items-center justify-between">
                  <div>
                    <a
                      href={proyecto.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (hasDragged.current) e.preventDefault();
                      }}
                      className="link-underline inline-block text-lg sm:text-xl font-semibold text-text-primary hover:text-primary transition-colors duration-fast ease-out-expo"
                    >
                      {proyecto.nombre}
                    </a>
                    <p className="mt-1 text-sm text-text-secondary">
                      {proyecto.descripcion}
                    </p>
                  </div>
                  <a
                    href={proyecto.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${proyecto.nombre} en nueva pestaña`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (hasDragged.current) e.preventDefault();
                    }}
                    className="flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 focus-visible:text-primary focus-visible:bg-primary/10 transition-colors duration-fast ease-out-expo"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
