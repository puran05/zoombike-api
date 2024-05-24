const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//this is our middleware that we passed
app.use(express.json());

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hi hope you are good");
});

mongoose
  .connect(
    "mongodb+srv://Admin:Charge5@zoombike.pgalcwe.mongodb.net/?retryWrites=true&w=majority&appName=ZoomBike"
  )
  .then(() => {
    console.log("Connected to the database");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connectiion failed");
  });
