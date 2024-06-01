import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodoAsync, fetchTodosAsync } from "../TodoSlice";

export default function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    if (input) {
      await dispatch(createTodoAsync({ text: input }));
      setInput("");
      dispatch(fetchTodosAsync());
    }
  };

  const todos = useSelector((state) => state.todos) || [];

  console.log(todos[0]);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  const removeTodo = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div>
      <h1 className="text-white">Todo List</h1>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus-outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
      <div>
        {/* <ul>
          {todos.map((todo, index) => (
            <li key={index} className="bg-black text-white">
              {todo._id}
              {" text => "} {todo.text}
            </li>
          ))}
        </ul> */}
        <ul className="list-none ml-9 mr-9 ">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-indigo-500 text-black px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <div className="text-white">{todo._id}</div>
              <button
                onClick={(e) => removeTodo(e, todo._id)}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
