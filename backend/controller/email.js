
const nodemailer = require('nodemailer');



// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service
  auth: {
    user: 'agrivimaann50@gmail.com', // Your email address
    pass: 'qadgahauhwfnfjpc', // Your email password or app password
  },
});

const sendConfirmationEmail = (req, res) => {
  const { name, email } = req.body;

  const mailOptions = {
    from: 'muglisangamesh1@gmail.com',
    to: email,
    subject: 'Thank you for contacting us',
    text: `Hello ${name},\n\nThank you for your response! Our admin will contact you soon.\n\nBest regards,\nAGRIVIMAANN`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
};

module.exports = {
  sendConfirmationEmail,
};