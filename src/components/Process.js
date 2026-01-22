import { procesoi, procesop } from "../data/onilabs";

export default function Process() {
  const procesosOrdenados = [...procesoi, ...procesop].sort(
    (a, b) => a.id - b.id,
  );

  return (
    <section id="proceso" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            Nuestro Proceso de Trabajo
          </h2>
        </div>

        <div className="lg:hidden space-y-6">
          {procesosOrdenados.map((item) => (
            <div
              key={item.id}
              className="relative bg-background border border-border rounded-2xl p-5 shadow-sm"
            >
              <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center font-bold text-sm shadow-md">
                {item.id}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {item.paso}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          <div className="space-y-0">
            {procesosOrdenados.map((item) => {
              const esProcesoi = procesoi.some((p) => p.id === item.id);

              return (
                <div
                  key={item.id}
                  className={`flex items-center ${
                    esProcesoi ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      esProcesoi ? "pl-12" : "pr-12"
                    }`}
                  >
                    <div
                      className={`bg-background border border-border rounded-xl p-6 shadow-sm ${
                        esProcesoi ? "text-left" : "text-right"
                      }`}
                    >
                      <h3 className="text-xl font-semibold mb-2 text-text-primary">
                        {item.paso}
                      </h3>
                      <p className="text-text-secondary">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-xl border-4 border-background z-10 shadow-md">
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
