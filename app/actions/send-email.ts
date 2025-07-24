"use server"

import { Resend } from "resend"

const resend = new Resend("re_jCBxKo5c_FvkFRc33i68278hWCKYYpfBG")

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return { success: false, error: "Todos los campos son requeridos" }
    }

    // Usando el dominio resend.dev por defecto
    const { data, error } = await resend.emails.send({
      from: "CENTRO PERICIAL PSICOLOGICO ID <no-reply@centropericialid.com>",
      to: "centropericialid@hotmail.com",
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      return { success: false, error: "Error al enviar el mensaje" }
    }

    return { success: true, data }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Error al enviar el mensaje" }
  }
}
