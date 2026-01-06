import { equipo } from "../data/onilabs";

export default function Team() {
  return (
    <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Nuestro Equipo
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Un equipo de profesionales apasionados por crear soluciones tecnológicas de calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipo.map((miembro) => (
            <div
              key={miembro.id}
              className="bg-background border border-border rounded-xl p-6 text-center shadow-sm hover:border-primary hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-white text-3xl font-bold shadow-md">
                {miembro.iniciales}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-text-primary">{miembro.nombre}</h3>
              <p className="text-accent mb-3 font-medium">{miembro.rol}</p>
              <p className="text-text-secondary text-sm">{miembro.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
