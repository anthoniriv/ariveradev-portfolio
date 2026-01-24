import { procesoi, procesop } from "../data/onilabs";

export default function Process() {
  const procesosOrdenados = [...procesoi, ...procesop].sort(
    (a, b) => a.id - b.id
  );

  return (
    <section
      id="proceso"
      className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Nuestro Proceso de Trabajo
          </h2>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden space-y-6">
          {procesosOrdenados.map((item) => (
            <div
              key={item.id}
              className="
                group relative
                bg-background border border-border rounded-2xl p-5
                shadow-sm select-none cursor-default
                transition-all duration-150 ease-out
                group-hover:border-primary/50
                group-hover:shadow-lg
                group-hover:-translate-y-1
              "
            >
              {/* NÚMERO */}
              <div
                className="
                  absolute -top-4 left-4
                  w-8 h-8 rounded-full
                  bg-gradient-to-r from-primary to-accent
                  text-white flex items-center justify-center
                  font-bold text-sm shadow-md
                  transition-all duration-150 ease-out
                  group-hover:scale-110
                  group-hover:shadow-xl
                "
              >
                {item.id}
              </div>

              {/* CONTENIDO */}
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {item.paso}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block relative">
          {/* LÍNEA CENTRAL */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />

          <div className="space-y-0">
            {procesosOrdenados.map((item) => {
              const esProcesoi = procesoi.some((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  className={`group flex items-center ${
                    esProcesoi ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* CARD */}
                  <div className={`flex-1 ${esProcesoi ? "pl-12" : "pr-12"}`}>
                    <div
                      className={`
                        relative bg-background
                        border border-border rounded-xl p-6
                        shadow-sm select-none cursor-default
                        transition-all duration-150 ease-out
                        group-hover:border-primary/50
                        group-hover:shadow-xl
                        group-hover:-translate-y-1
                        ${esProcesoi ? "text-left" : "text-right"}
                      `}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-text-primary">
                        {item.paso}
                      </h3>
                      <p className="text-text-secondary">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>

                  {/* NÚMERO */}
                  <div
                    className="
                      w-16 h-16 rounded-full
                      bg-gradient-to-r from-primary to-accent
                      flex items-center justify-center
                      text-white font-bold text-xl
                      border-4 border-background z-10 shadow-md
                      transition-all duration-150 ease-out
                      group-hover:scale-110
                      group-hover:shadow-xl
                    "
                  >
                    {item.id}
                  </div>

                  <div className="flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
