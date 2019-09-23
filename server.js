require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();
const Books = require("./models/books");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
  .connect(
    "mongodb://" +
      process.env.MONGO_USERNAME +
      ":" +
      process.env.MONGO_PASSWORD +
      "@cluster0-shard-00-00-eqmgo.mongodb.net:27017,cluster0-shard-00-01-eqmgo.mongodb.net:27017,cluster0-shard-00-02-eqmgo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )

  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log(err);
  });

// Define API routes here
app.post("/api/books", (req, res) => {
  console.log(req.body);
  Books.create(req.body)
    .then(function(dbBook) {
      console.log("Success");

      res.json(dbBook);
    })
    .catch(function(err) {
      console.log("There is an Error");
    });
});

app.get("/api/books", (req, res) => {
  Books.find()
    .then(function(dbBooks) {
      console.log("Success");

      res.json(dbBooks);
    })
    .catch(function(err) {
      console.log("There is an Error");
    });
});

app.delete("/api/books/:id", (req, res) => {
  console.log(req.params.id);
  Books.findByIdAndDelete(req.params.id).then(function(response) {
    console.log(response);
    res.json(response);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
