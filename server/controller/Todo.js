const { Todo } = require("../Model/TodoModel");

exports.addTodo = async (req, res) => {
  try {
    const { text } = req.body;
    console.log(text); // Log the received todo data for debugging
    const newTodo = new Todo({ text });
    const savedTodo = await newTodo.save();
    console.log(savedTodo); // Log the saved todo for debugging

    res.status(200).json({ savedTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.fetchTodoList = async (req, res) => {
  try {
    const todos = await Todo.find();
    console.log(todos, "backtodo");
    res.status(200).json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
