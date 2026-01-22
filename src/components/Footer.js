import { links } from "../data/onilabs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Onilabs
            </h3>
            <p className="text-text-secondary text-sm">
              Laboratorio de programación especializado en desarrollo web,
              móvil, microservicios y ecommerce.
            </p>
          </div>

          <div className="flex flex-col items-center text-left">
            <h4 className="text-text-primary font-semibold mb-4">Enlaces</h4>

            <ul className="space-y-2 ml-2">
              <li>
                <a
                  href="#servicios"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#proceso"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#equipo"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Equipo
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-text-primary font-semibold mb-4">Síguenos</h4>

            <div className="flex space-x-4 justify-center">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <AiFillLinkedin className="text-2xl" />
              </a>

              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <AiFillGithub className="text-2xl" />
              </a>

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Onilabs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
