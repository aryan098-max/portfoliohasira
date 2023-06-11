const nodemailer = require("nodemailer");

// Configure Nodemailer with your SMTP server settings.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  auth: {
    user: "secureeasily@gmail.com",
    password: "drcd abbv jwqh gubq",
  },
});

// Create a new mail object.
const mail = {
  from: "secureeasily@gmail.com",
  to: "mohanjoshi730@gmail.com",
  subject: "This is a test email",
  body: "This is the body of the email.",
};

// Send the mail object using Nodemailer.
transporter.sendMail(mail, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Mail sent!");
  }
});
