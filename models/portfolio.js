const mongoose = require("mongoose");

// to avoid error
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/portfolioApp")
  // .then(console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

// schema is used to create the sturcture of the data / blueprint
const portfolioSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  image: "String",
});

// model creation - It helps to create a collection and provide a interface to interact with that collection
// We are able to perform CRUD operations on collection with the help of model

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
