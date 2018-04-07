import nodemailer from 'nodemailer';
import config from '../config';

const smtpConfig = {
  host: config.mail.smtp.host,
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
      user: config.mail.smtp.username,
      pass: config.mail.smtp.password,
  },
};

const gmailConfig = {
  service: 'gmail',
  auth: {
    user: config.mail.gmail.username,
    pass: config.mail.gmail.password,
  },
};

export const transporter = nodemailer.createTransport(smtpConfig);

// const mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com', // multi separate by ', '
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!', // or html
// };

const sendMail = (mailOptions, onDone) => {
  mailOptions.from = `"FU Team" <kysikhongten@gmail.com>`;
  transporter.sendMail(mailOptions, (error, info) => {
    if (onDone) onDone({ error, info });
  });
};

export default sendMail;
