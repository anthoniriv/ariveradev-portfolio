import { procesoi } from "../data/onilabs";
import { procesop } from "../data/onilabs";

export default function Process() {
  const procesosOrdenados = [...procesoi, ...procesop].sort(
    (a, b) => a.id - b.id,
  );

  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-text-primary">
            Nuestro Proceso de Trabajo
          </h2>
          {/* <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Un enfoque estructurado que garantiza resultados exitosos en cada proyecto
          </p> */}
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {procesosOrdenados.map((item) => {
              const esProcesoi = procesoi.some((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  className={`flex flex-col items-center ${
                    esProcesoi ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div
                    className={`flex-1 mb-8 lg:mb-0 ${
                      esProcesoi ? "lg:pl-12" : "lg:pr-12"
                    }`}
                  >
                    <div
                      className={`bg-background border border-border rounded-xl p-6 shadow-sm hover:border-primary hover:shadow-md transition-all ${
                        esProcesoi ? "" : "text-right"
                      }`}
                    >
                      <div
                        className={`flex items-center mb-4 ${
                          esProcesoi ? "" : "justify-end"
                        }`}
                      >
                        <h3 className="text-2xl font-semibold text-text-primary">
                          {item.paso}
                        </h3>
                      </div>
                      <p className="text-text-secondary">{item.descripcion}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl border-4 border-background z-10 shadow-md">
                    {item.id}
                  </div>

                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
