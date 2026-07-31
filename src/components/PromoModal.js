import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Bebas_Neue, DM_Sans } from "@next/font/google";

// Línea gráfica de Onistore
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

const oni = {
  black: "#12101e",
  ink: "#1e1a30",
  surface: "#2a2440",
  line: "#3a3352",
  purple: "#7b5ea7",
  purpleDark: "#5f4783",
  purpleSoft: "#9b7fc4",
  gold: "#c4a84a",
  bone: "#f2ebe0",
  ash: "#a79fb5",
};

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
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 touch-none overscroll-none ${dmSans.className}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm animate-fade-in" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: oni.ink,
          border: `1px solid ${oni.line}`,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Accent top border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${oni.purpleSoft}, ${oni.gold}, transparent)`,
          }}
        />

        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
          style={{
            background: "rgba(18, 16, 30, 0.6)",
            color: oni.bone,
            border: `1px solid ${oni.line}`,
            backdropFilter: "blur(4px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = oni.gold;
            e.currentTarget.style.color = oni.gold;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = oni.line;
            e.currentTarget.style.color = oni.bone;
          }}
          aria-label="Cerrar"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Cover */}
        <div className="relative h-40 sm:h-44 w-full overflow-hidden">
          <Image
            src="/onistore2.png"
            alt="Onistore, tienda de manga y anime"
            fill
            sizes="(max-width: 640px) 100vw, 448px"
            className="object-cover object-center scale-[1.35]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(18,16,30,0.15), ${oni.ink} 95%)`,
            }}
          />
        </div>

        {/* Header */}
        <div className="relative px-6 -mt-8 text-center">
          {/* Badge */}
          <span
            className="relative inline-block px-3 py-1 mb-3 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full"
            style={{
              color: oni.gold,
              background: "rgba(196, 168, 74, 0.12)",
              border: `1px solid rgba(196, 168, 74, 0.35)`,
              backdropFilter: "blur(4px)",
            }}
          >
            Nuevo lanzamiento
          </span>

          {/* Title */}
          <h2
            className={`relative text-4xl sm:text-5xl tracking-[0.06em] mb-1 ${bebas.className}`}
            style={{ color: oni.bone }}
          >
            ONI<span style={{ color: oni.purpleSoft }}>STORE</span>
          </h2>
          <p
            className="relative text-sm font-medium"
            style={{ color: oni.ash }}
          >
            Nuestro ecommerce de manga y anime ya está online
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6 mt-4" style={{ borderTop: `1px solid ${oni.line}` }} />

        {/* Body */}
        <div className="px-6 pt-4 pb-6 text-center">
          <p
            className="text-sm sm:text-base leading-relaxed mb-6"
            style={{ color: oni.bone }}
          >
            <strong style={{ color: oni.gold }}>Manga, figuras y coleccionables</strong>{" "}
            anime con envíos a todo el Perú, recojo en tienda y nuevos drops cada semana.
          </p>

          {/* CTA Button */}
          <a
            href="https://www.onistore.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${oni.purple}, ${oni.purpleDark})`,
              color: oni.bone,
              boxShadow: "0 4px 14px rgba(123, 94, 167, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${oni.purpleSoft}, ${oni.purple})`;
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(123, 94, 167, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${oni.purple}, ${oni.purpleDark})`;
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(123, 94, 167, 0.35)";
            }}
          >
            Visita Onistore
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 text-xs transition-colors duration-150"
            style={{ color: oni.ash }}
            onMouseEnter={(e) => (e.currentTarget.style.color = oni.bone)}
            onMouseLeave={(e) => (e.currentTarget.style.color = oni.ash)}
          >
            Ahora no, gracias
          </button>
        </div>
      </div>
    </div>
  );
}
