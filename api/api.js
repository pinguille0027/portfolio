const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 6969;
app.use(morgan())
app.use(express.json())
app.use(cookieParser())
console.log(process.env.HOST);
console.log(process.env.EMAILPORT);
console.log(process.env.EMAILUSER);
console.log(process.env.EMAILPASS);
console.log(process.env.EMAILFROM);
console.log(process.env.EMAILTO);
async function sendEmail(data) {
  // Configuramos el transportador SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAILPORT,
    secure: true,
    auth: {
      user: process.env.EMAILUSER,
      pass: process.env.EMAILPASS
    }
  });
  
  // Definimos el contenido del correo electrónico
  let mailOptions = {
    from: process.env.EMAILFROM,
    to: process.env.EMAILTO,
    subject: 'Nuevo mensaje del portfolio',
    text: `Recibiste el siguiente mensaje a través del Portfolio:
    ${JSON.stringify(data)}`
  };

  // Enviamos el correo electrónico
  let info = await transporter.sendMail(mailOptions);

  console.log(`Correo electrónico enviado: ${info.messageId}`);
}
app.post('/mensaje', async (req, res) => {
  try {
    const data= req.body;
   await sendEmail(data);
   res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});






// cARGA
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.use(express.static(path.join(__dirname, './public/')));
app.use(express.static(path.join(__dirname, './public/')));

app.listen(port);
console.log('Server started at http://localhost:' + port);