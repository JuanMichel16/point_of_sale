import nodemailer from 'nodemailer';


const emailOlvidePassword = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const {email, name, token} = datos;

      const message = await transport.sendMail({
        from: "Punto de venta Mixtli",
        to: email,
        subject: "Reestablece tu contraseña",
        text: "Reestablece tu contraseña en Point of Sale",
        html: `
          <p>Hola ${name}, has solicitado reestablecer tu contraseña en POS</p>
          <p>Para generar una nueva contraseña debes seguir el siguiente enlace:</p>
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>
          <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
        `
      });

      console.log("Mensaje enviado: %s", message);
}

export default emailOlvidePassword;