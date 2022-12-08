import nodemailer from 'nodemailer';


const emailRegistro = async (datos) => {
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
        subject: "Comprobar cuenta",
        text: "Comprueba tu cuenta en Point of Sale",
        html: `
          <p>Hola ${name} comprueba tu email en POS</p>
          <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:</p>
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar Cuenta</a>
          <p>Si tu no creaste esta cuenta puedes ignorar este mensaje</p>
        `
      });

      console.log("Mensaje enviado: %s", message);
}

export default emailRegistro



