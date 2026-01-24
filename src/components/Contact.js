import { useState } from "react";
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
  const [status, setStatus] = useState("idle");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setStatus("success");

      setFormData({
        nombre: "",
        empresa: "",
        correo: "",
        estado: "",
        tipo: "",
        mensaje: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contactanos"
      className="font-quantico py-24 px-4 sm:px-8 bg-gradient-to-b from-zinc-50 to-slate-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-3xl md:text-4xl font-medium tracking-tight text-slate-800">
            研究 · CONTÁCTANOS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="bg-white/70 backdrop-blur border border-slate-200 rounded-2xl p-10 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.25)]">
            <h3 className="text-xl font-medium text-slate-800 mb-8">
              Cuéntanos qué tienes en mente
            </h3>

            {status === "success" && (
              <div className="mb-8 bg-emerald-100 text-emerald-700 px-4 py-3 rounded-xl text-center font-medium">
                Mensaje enviado correctamente ✓
              </div>
            )}

            {status === "error" && (
              <div className="mb-8 bg-rose-100 text-rose-700 px-4 py-3 rounded-xl text-center font-medium">
                Error al enviar el mensaje
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
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
                  <p className="text-xs text-rose-500 mt-2">
                    {errors.nombre}
                  </p>
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
                  <option>Solo tengo una idea</option>
                  <option>Quiero empezar desde cero</option>
                  <option>Ya tengo algo y quiero mejorarlo</option>
                  <option>Mi proyecto ya funciona</option>
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
                  <option>Página web</option>
                  <option>Tienda online</option>
                  <option>Sistema o plataforma</option>
                  <option>Aún no lo tengo claro</option>
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
                  <p className="text-xs text-rose-500 mt-2">
                    {errors.correo}
                  </p>
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
                  className="w-full py-3 bg-transparent border-b border-slate-300 focus:border-indigo-700 focus:outline-none resize-none"
                />
                {errors.mensaje && (
                  <p className="text-xs text-rose-500 mt-2">
                    {errors.mensaje}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`
                    w-full py-3 rounded-xl text-base font-medium transition
                    ${status === "idle" && "bg-indigo-700 text-white hover:bg-indigo-800"}
                    ${status === "loading" && "bg-slate-400 text-white cursor-not-allowed"}
                    ${status === "success" && "bg-emerald-600 text-white"}
                    ${status === "error" && "bg-rose-600 text-white"}
                  `}
                >
                  {status === "idle" && "Enviar mensaje"}
                  {status === "loading" && "Enviando..."}
                  {status === "success" && "Mensaje enviado ✓"}
                  {status === "error" && "Reintentar"}
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-white/60 border border-slate-200 rounded-2xl p-10">
              <h3 className="text-xl font-medium text-slate-800 mb-6">
                Te acompañamos en todo el proceso
              </h3>

              <p className="text-base text-slate-600 mb-10 leading-relaxed">
                No necesitas saber de tecnología ni tener todo claro. Te ayudamos
                a ordenar tu idea y convertirla en algo real.
              </p>

              <div className="space-y-6 text-base">
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  <span className="text-slate-700">987 654 321</span>
                </div>

                <a
                  href="https://www.linkedin.com/company/onilabs-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-80 transition"
                >
                  <AiOutlineLinkedin className="w-6 h-6 text-[#0A66C2]" />
                  <span className="text-slate-700">OniLabs</span>
                </a>

                <div className="flex items-center gap-4">
                  <AiOutlineMail className="w-6 h-6 text-slate-500" />
                  <span className="text-slate-700">
                    contacto.onilabs@gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8 text-m text-slate-600">
              <p className="mb-3 font-medium text-slate-700">
                ¿Qué pasa después?
              </p>
              <ul className="space-y-2">
                <li>• Leemos tu mensaje</li>
                <li>• Respondemos en 24–48 horas</li>
                <li>• Te proponemos la mejor opción</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
