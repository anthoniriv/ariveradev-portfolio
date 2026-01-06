import { proceso } from "../data/onilabs";

export default function Process() {
  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Un enfoque estructurado que garantiza resultados exitosos en cada proyecto
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-0">
            {proceso.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"} mb-8 lg:mb-0`}>
                  <div className="bg-surface border border-surface rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-4">
                        {item.id}
                      </div>
                      <h3 className="text-2xl font-semibold text-text">{item.paso}</h3>
                    </div>
                    <p className="text-muted">{item.descripcion}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl border-4 border-bg z-10">
                  {item.id}
                </div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
