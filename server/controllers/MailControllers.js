import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (req, res) => {
  try {
    const { email } = req.body;

    const html = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Новое заявка!</h1>
        <p>E-mail: ${email}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL, // Адрес отправителя
      to: process.env.EMAIL, // Адрес получателя
      subject: `Новое сообщение`,
      html: html,
    });

    res.send("Сообщение отправлено!");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить сообщение",
    });
  }
};
