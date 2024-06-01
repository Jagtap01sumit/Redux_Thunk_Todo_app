const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  text: { type: "String" },
});

exports.Todo = mongoose.model("Todo", TodoSchema);
