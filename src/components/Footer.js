import { links } from "../data/onilabs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b border-t border-border pt-10 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10 md:mb-8">
          <div className="text-center md:text-left">
            <img
              src="/logo.png"
              alt="OniLabs logo"
              className="h-20 w-20 object-contain mb-2"
            />
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OniLabs
            </a>
            <p className="text-text-secondary mt-2 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Laboratorio de programación especializado en desarrollo web,
              móvil, microservicios y ecommerce.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-center text-center md:text-left">
            <h4 className="text-text-primary hidden md:block font-semibold mb-4">
              Enlaces
            </h4>

            <ul className="hidden md:block ml-9 space-y-2">
              <li>
                <a
                  href="#servicios"
                  className="text-text-secondary hover:text-primary text-sm"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#portafolio"
                  className="text-text-secondary hover:text-primary text-sm"
                >
                  Repositorio
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="text-text-secondary hover:text-primary text-sm"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-text-secondary hover:text-primary text-sm"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contactanos"
                  className="text-text-secondary hover:text-primary text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-text-primary font-semibold mb-4">Síguenos</h4>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/company/onilabs-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <AiFillLinkedin className="text-3xl md:text-2xl" />
              </a>

              <a
                href="https://github.com/OnichanDevTeam"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <AiFillGithub className="text-3xl md:text-2xl" />
              </a>

              <a
                href="https://wa.me/51993109998"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-text-secondary hover:text-primary transition-colors"
              >
                <FaWhatsapp className="text-3xl md:text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border md:pt-8 text-center">
          <p className="text-text-secondary text-xs sm:text-sm">
            © {currentYear} OnilLabs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
