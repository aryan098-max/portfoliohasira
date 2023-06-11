const mongoose = require("mongoose");
const Portfolio = require("../models/portfolio");
const fs = require("fs");

// ========= Mongoose Connection ======>
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/portfolioApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

// // selecting image
// const imagePath = "../public/smart.jpg";
// const imageContent = fs.readFileSync(imagePath);

// function expression

const seedDB = async function () {
  await Portfolio.deleteOne({});

  const portfolio = new Portfolio({
    name: "Aryan",
    image:
      // "https://res.cloudinary.com/dxtghtzir/image/upload/v1685022322/smart-removebg-preview-modified_gtq7d4.png",
      " https://res.cloudinary.com/dxtghtzir/image/upload/v1685033408/smart-removebg-preview_lf1jom.png",
  });
  await portfolio.save();
};

// It closes the connection
// Why we are using .then() becuase async function always return a promise which is either resolved or rejected.
seedDB().then(() => {
  mongoose.connection.close();
});
