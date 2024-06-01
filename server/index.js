const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { addTodo } = require("./controller/Todo");
require("dotenv").config();

const bodyParser = require("body-parser");
const { fetchTodoList } = require("./controller/Todo");
const server = express();
server.use(bodyParser.json());
const corsOptions = {
  origin: "*",
  credentials: true,
};

server.use(cors(corsOptions));

const connectToMongo = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB Successful");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

connectToMongo();

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.post("/addTodo", addTodo);
server.get("/todos", fetchTodoList);

server.listen(8080, () => {
  console.log("Server started on port 8080");
});
