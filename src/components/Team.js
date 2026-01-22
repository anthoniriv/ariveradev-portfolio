import { equipo } from "../data/onilabs";

export default function Team() {
  return (
    <section
      id="equipo"
      className="
        py-20 lg:py-32
        w-full
        bg-gradient-to-b from-surface via-surface to-background
      "
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            Nuestro Equipo
          </h2>
          <div className="w-40 sm:w-64 lg:w-96 h-1 mx-auto bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {equipo.map((miembro) => (
            <div
              key={miembro.id}
              className="
                relative bg-background border border-border rounded-3xl
                p-8 lg:p-20
                min-h-auto lg:min-h-[440px]
                flex flex-col items-center text-center
                shadow-sm transition-all duration-300
                hover:border-primary/60 hover:shadow-xl hover:-translate-y-3
              "
            >
              <div className="absolute -top-16 lg:-top-20 -z-10 w-52 h-52 lg:w-72 lg:h-72 bg-primary/10 rounded-full blur-3xl" />

              <div className="relative w-24 h-24 lg:w-36 lg:h-36 mb-6 lg:mb-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-40" />
                <div className="relative w-full h-full rounded-full bg-surface flex items-center justify-center text-primary text-3xl lg:text-4xl font-bold tracking-wide shadow-md">
                  {miembro.iniciales}
                </div>
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-1">
                {miembro.nombre}
              </h3>
              <p className="text-accent mb-4 lg:mb-6 font-semibold text-sm lg:text-base">
                {miembro.rol}
              </p>

              <p className="text-text-secondary text-sm lg:text-base font-medium leading-relaxed">
                {miembro.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
