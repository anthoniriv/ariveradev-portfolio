import { useState } from "react";
import { links } from "../data/onilabs";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    estado: "",
    tipo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Nombre requerido";
    if (!formData.correo.trim()) newErrors.correo = "Correo requerido";
    if (!formData.mensaje.trim()) newErrors.mensaje = "Cuéntanos tu idea";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: "",
        empresa: "",
        correo: "",
        estado: "",
        tipo: "",
        mensaje: "",
      });
    }, 2500);
  };

  return (
    <section
      id="contactanos"
      className="font-quantico py-24 px-4 sm:px-8 bg-gradient-to-b from-zinc-50 to-slate-100"
    >
      <div className="max-w-6xl font-quantico mx-auto">
        <div className="text-center mb-8">
          <p className="text-4xl md:text-5xl font-medium tracking-tight text-slate-800">
            研究 · CONTÁCTANOS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-10 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
            <h3 className="text-2xl font-medium text-slate-800 mb-10">
              Cuéntanos qué tienes en mente
            </h3>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 font-quantico"
            >
              <div>
                <label className="text-sm text-slate-500">Nombre</label>
                <input
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none"
                />
                {errors.nombre && (
                  <p className="text-xs text-rose-500 mt-2">{errors.nombre}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-slate-500">
                  Empresa o proyecto (opcional)
                </label>
                <input
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-slate-500">
                  ¿En qué punto estás con tu idea?
                </label>
                <select
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="idea">Solo tengo una idea</option>
                  <option value="inicio">Quiero empezar desde cero</option>
                  <option value="mejorar">
                    Ya tengo algo y quiero mejorarlo
                  </option>
                  <option value="activo">
                    Mi proyecto ya está funcionando
                  </option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-500">
                  ¿Qué te gustaría crear?
                </label>
                <select
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="web">Página web</option>
                  <option value="tienda">Tienda online</option>
                  <option value="sistema">Sistema o plataforma</option>
                  <option value="otro">Aún no lo tengo claro</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-slate-500">Correo</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none"
                />
                {errors.correo && (
                  <p className="text-xs text-rose-500 mt-2">{errors.correo}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-slate-500">
                  Cuéntanos un poco más
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Qué quieres lograr y para quién es"
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none resize-none"
                />
                {errors.mensaje && (
                  <p className="text-xs text-rose-500 mt-2">{errors.mensaje}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-indigo-700 text-white py-3 rounded-xl font-medium hover:bg-indigo-800 transition"
                >
                  {submitted ? "Mensaje enviado" : "Enviar mensaje"}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-white/60 border border-slate-200 rounded-2xl p-10">
              <h3 className="text-2xl font-medium text-slate-800 mb-6">
                Te acompañamos en todo el proceso
              </h3>

              <p className="text-slate-600 mb-10 leading-relaxed">
                No necesitas saber de tecnología ni tener todo claro. Te
                ayudamos a ordenar tu idea y convertirla en algo real.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="w-8 h-8 text-[#25D366]" />
                  <span className="text-slate-700">
                    Contacto directo por WhatsApp
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <AiOutlineLinkedin className="w-8 h-8 text-[#0A66C2]" />
                  <span className="text-slate-700">
                    Perfil profesional en LinkedIn
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <AiOutlineMail className="w-8 h-8 text-slate-500" />
                  <span className="text-slate-700">{links.correo}</span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 text-sm text-slate-600">
              <p className="mb-3 font-medium text-slate-700">
                ¿Qué pasa después?
              </p>
              <ul className="space-y-2">
                <li>• Leemos tu mensaje</li>
                <li>• Te respondemos en 24–48 horas</li>
                <li>• Te proponemos la mejor opción</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
