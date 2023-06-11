const express = require("express");
const app = express();
const path = require("path");

// sending mail
const nodemailer = require("nodemailer");

// to use layouts you need to use ejs-mate
const ejsMate = require("ejs-mate");

// body parser url
app.use(express.urlencoded({ extended: true }));

// // Database connection
// mongoose
//   .connect("mongodb://localhost:27017/portfolioApp")
//   .then(console.log("connected"))
//   .catch((err) => {
//     console.log(err);
//   });

// for serving static files
app.use(express.static(path.join(__dirname, "public")));

/* ====== ejs =============> 
 setting view enginge and setting path so that it can run outside the current dir as well.
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
// ========================>

// =============== Routes =================>
app.get("/", (req, res) => {
  res.render("portfolio/home");
});

app.get("/skills", (req, res) => {
  res.render("portfolio/skills");
});

app.get("/projects", (req, res) => {
  res.render("portfolio/project");
});
// =================================>
app.get("/contact", (req, res) => {
  res.render("portfolio/contact");
});

app.post("/contact", async (req, res) => {
  const { name, email, company, job } = req.body;

  console.log(
    `Name: ${name}, Email: ${email}, Company Name:${company}, Job:${job}`
  );

  // creating transport object
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aryangupta4279@gmail.com",
      pass: "drcd abbv jwqh gubq",
    },
  });

  // creating mailoptions

  const mailoptions = {
    from: "aryangupta4279@gmail.com",
    to: email,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\n Company Name: ${company}\n job: ${job}`,
  };

  // calling a sendMail method using a transporter object

  transporter.sendMail(mailoptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent" + info.response);
      res.redirect(`/home`);
    }
  });
  res.redirect("/");
});

// ==========================================>

app.get("/about", (req, res) => {
  res.render("portfolio/about");
});

// =========================================>

app.get("/resume", (req, res) => {
  res.render("portfolio/resume");
});

// =============== Running on port 3000 ===============>
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
