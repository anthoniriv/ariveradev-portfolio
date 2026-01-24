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
      subject: "📩 NUEVO MENSAJE DESDE LA WEB 📩",
      html: `
        <div style="
          font-family: Arial, Helvetica, sans-serif;
          background-color: #f4f6f8;
          padding: 32px;
        ">
          <div style="
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e7eb;
          ">
            
            <!-- Header -->
            <div style="
              padding: 24px;
              background: linear-gradient(135deg, #4f46e5, #6366f1);
              color: #ffffff;
            ">
              <h2 style="
                margin: 0;
                font-size: 20px;
                font-weight: 600;
              ">
                Nuevo contacto desde la web
              </h2>
              <p style="
                margin: 6px 0 0;
                font-size: 14px;
                opacity: 0.9;
              ">
                Formulario de OniLabs
              </p>
            </div>

            <div style="padding: 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px; color: #334155;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600;">Nombre</td>
                  <td style="padding: 8px 0;">${nombre}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600;">Empresa</td>
                  <td style="padding: 8px 0;">${empresa || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600;">Correo</td>
                  <td style="padding: 8px 0;">
                    <a href="mailto:${correo}" style="color: #4f46e5; text-decoration: none;">
                      ${correo}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600;">Estado</td>
                  <td style="padding: 8px 0;">${estado || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600;">Tipo</td>
                  <td style="padding: 8px 0;">${tipo || "—"}</td>
                </tr>
              </table>

              <div style="
                margin-top: 24px;
                padding: 16px;
                background-color: #f8fafc;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              ">
                <p style="
                  margin: 0 0 8px;
                  font-weight: 600;
                  color: #1e293b;
                ">
                  Mensaje
                </p>
                <p style="
                  margin: 0;
                  white-space: pre-line;
                  line-height: 1.6;
                  color: #334155;
                ">
                  ${mensaje}
                </p>
              </div>
            </div>

            <div style="
              padding: 16px 24px;
              background-color: #f1f5f9;
              font-size: 12px;
              color: #64748b;
              text-align: center;
            ">
              Este mensaje fue enviado desde el formulario de contacto de la web de OniLabs.
            </div>

          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Correo enviado" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error al enviar correo" });
  }
}
