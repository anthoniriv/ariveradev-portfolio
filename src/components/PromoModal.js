import { useState, useEffect, useRef } from "react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  // Bloquear scroll vertical en mobile sin tocar body styles
  useEffect(() => {
    if (!isOpen) return;
    const overlay = overlayRef.current;
    if (!overlay) return;

    const prevent = (e) => e.preventDefault();
    overlay.addEventListener("touchmove", prevent, { passive: false });
    return () => overlay.removeEventListener("touchmove", prevent);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 touch-none overscroll-none"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0A0A0A",
          border: "1px solid #262626",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Accent top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #Fb2c36, transparent)",
          }}
        />

        {/* Header */}
        <div className="relative px-6 pt-8 pb-3 text-center">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
            style={{
              background: "transparent",
              color: "#A3A3A3",
              border: "1px solid #262626",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#Fb2c36";
              e.currentTarget.style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#262626";
              e.currentTarget.style.color = "#A3A3A3";
            }}
            aria-label="Cerrar"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>

          {/* Decorative glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(251, 44, 54, 0.12), transparent 70%)" }}
          />

          {/* Badge */}
          <span
            className="relative inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full"
            style={{
              color: "#E5E5E5",
              background: "rgba(251, 44, 54, 0.12)",
              border: "1px solid rgba(251, 44, 54, 0.3)",
            }}
          >
            Nuevo
          </span>

          {/* Title */}
          <h2
            className="relative text-3xl sm:text-4xl font-bold tracking-tight mb-1"
            style={{ color: "#FFFFFF" }}
          >
            Versus{" "}
            <span style={{ color: "#Fb2c36" }}>Electoral Perú</span>
          </h2>
          <p
            className="relative text-sm font-medium"
            style={{ color: "#A3A3A3" }}
          >
            Monitoreo electoral con fuentes verificadas
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6" style={{ borderTop: "1px solid #262626" }} />

        {/* Body */}
        <div className="px-6 pt-3 pb-6 text-center">
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: "#E5E5E5" }}
          >
            Monitoreo automático de{" "}
            <strong style={{ color: "#FFFFFF" }}>36 candidatos</strong>{" "}
            presidenciales. Acusaciones, denuncias y sentencias con fuentes verificadas de 20 medios.
          </p>

          {/* CTA Button */}
          <a
            href="https://www.versuselectoral.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#Fb2c36",
              color: "#FFFFFF",
              boxShadow: "0 4px 14px rgba(251, 44, 54, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#dc2626";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(251, 44, 54, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#Fb2c36";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(251, 44, 54, 0.3)";
            }}
          >
            Visita Versus Electoral Perú
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-xs transition-colors duration-150"
            style={{ color: "#A3A3A3" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#A3A3A3")}
          >
            Ahora no, gracias
          </button>
        </div>
      </div>
    </div>
  );
}
