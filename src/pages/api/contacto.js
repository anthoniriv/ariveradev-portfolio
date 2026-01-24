import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, empresa, correo, estado, tipo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: "contacto.onilabs@gmail.com",
      subject: "Nuevo mensaje desde la web",
      html: `
        <h3></h3>
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Empresa:</b> ${empresa || "—"}</p>
        <p><b>Correo:</b> ${correo}</p>
        <p><b>Estado:</b> ${estado || "—"}</p>
        <p><b>Tipo:</b> ${tipo || "—"}</p>
        <p><b>Mensaje:</b><br/>${mensaje}</p>
      `,
    });

    return res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al enviar correo" });
  }
}
