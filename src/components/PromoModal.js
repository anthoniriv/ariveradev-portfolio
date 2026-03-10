import { useState, useEffect } from "react";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#0a0f0a",
          border: "1px solid rgba(34, 197, 94, 0.15)",
          boxShadow:
            "0 0 60px rgba(57, 255, 20, 0.08), 0 25px 50px rgba(0, 0, 0, 0.5)",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        {/* Accent top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, #39FF14, transparent)",
          }}
        />

        {/* Header */}
        <div className="relative px-6 pt-8 pb-6 text-center">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
            style={{
              background: "rgba(148, 163, 148, 0.08)",
              color: "#64796b",
              border: "1px solid rgba(148, 163, 148, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.3)";
              e.currentTarget.style.color = "#f0fdf4";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(148, 163, 148, 0.08)";
              e.currentTarget.style.color = "#64796b";
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
            style={{ background: "radial-gradient(circle, rgba(57, 255, 20, 0.12), transparent 70%)" }}
          />

          {/* Badge */}
          <span
            className="relative inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full"
            style={{
              color: "#22c55e",
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
            }}
          >
            Nuevo
          </span>

          {/* Title */}
          <h2
            className="relative text-2xl sm:text-3xl font-bold tracking-tight mb-2"
            style={{ color: "#f0fdf4" }}
          >
            OniGrowth
          </h2>
          <p
            className="relative text-sm font-medium"
            style={{ color: "#39FF14" }}
          >
            Growth-ready prompt systems
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6" style={{ borderTop: "1px solid rgba(148, 163, 148, 0.08)" }} />

        {/* Body */}
        <div className="px-6 py-6 text-center">
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: "#94a39b" }}
          >
            Obtene un sistema de prompts listo para el crecimiento de tu negocio
            — outputs que podes publicar, vender o automatizar.
          </p>

          {/* CTA Button */}
          <a
            href="https://onigrowth.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#22c55e",
              color: "#0a0f0a",
              boxShadow: "0 4px 14px rgba(34, 197, 94, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.1)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(57, 255, 20, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(34, 197, 94, 0.25)";
            }}
          >
            Visitar OniGrowth
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-xs transition-colors duration-150"
            style={{ color: "#64796b" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0fdf4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#64796b")}
          >
            Ahora no, gracias
          </button>
        </div>
      </div>
    </div>
  );
}
