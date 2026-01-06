import { useState } from "react";
import { links } from "../data/onilabs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }
    if (!formData.correo.trim()) {
      newErrors.correo = "El correo es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = "El correo no es válido";
    }
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Aquí iría la lógica de envío al backend
      console.log("Form data:", formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ nombre: "", correo: "", mensaje: "" });
      }, 3000);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Escríbenos y te responderemos lo antes posible. También puedes contactarnos directamente por WhatsApp o LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-text-primary">Escríbenos</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-text-primary mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all ${
                    errors.nombre
                      ? "border-error focus:ring-error"
                      : "border-border focus:border-primary focus:ring-primary"
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-error">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-text-primary mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all ${
                    errors.correo
                      ? "border-error focus:ring-error"
                      : "border-border focus:border-primary focus:ring-primary"
                  }`}
                  placeholder="tu@correo.com"
                />
                {errors.correo && (
                  <p className="mt-1 text-sm text-error">{errors.correo}</p>
                )}
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-text-primary mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.mensaje
                      ? "border-error focus:ring-error"
                      : "border-border focus:border-primary focus:ring-primary"
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.mensaje && (
                  <p className="mt-1 text-sm text-error">{errors.mensaje}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark hover:shadow-md transition-all transform hover:scale-105"
              >
                {submitted ? "¡Mensaje enviado!" : "Enviar mensaje"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-background border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">O contáctanos directamente</h3>
              <div className="space-y-4">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent-soft transition-all group"
                >
                  <FaWhatsapp className="text-2xl text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-text-primary">WhatsApp</p>
                    <p className="text-sm text-text-secondary">Escríbenos por WhatsApp</p>
                  </div>
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-surface border border-border rounded-lg hover:border-accent hover:bg-accent-soft transition-all group"
                >
                  <AiFillLinkedin className="text-2xl text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-semibold text-text-primary">LinkedIn</p>
                    <p className="text-sm text-text-secondary">Conecta con nosotros</p>
                  </div>
                </a>

                <div className="p-4 bg-surface border border-border rounded-lg">
                  <p className="font-semibold text-text-primary mb-1">Correo</p>
                  <a href={`mailto:${links.correo}`} className="text-accent hover:underline">
                    {links.correo}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary-soft border border-primary/30 rounded-xl p-6">
              <p className="text-text-primary font-semibold mb-2">¿Prefieres una llamada?</p>
              <a
                href="#contacto"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark hover:shadow-md transition-all"
              >
                Agenda una llamada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
