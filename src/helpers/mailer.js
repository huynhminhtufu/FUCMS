import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword',
  },
});

// const mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com', // multi separate by ', '
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!', // or html
// };

const sendMail = (mailOptions, onDone) => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (onDone) onDone({ error, info });
  });
};

export default sendMail;
