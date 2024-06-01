import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodoAsync } from "../TodoSlice";

export default function AddTodos() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    if (input) {
      await dispatch(createTodoAsync({ text: input }));
      setInput("");
      // dispatch(fetchTodosAsync());
    }
  };

  const todos = useSelector((state) => state.todos) || [];

  console.log(todos);

  // useEffect(() => {
  //   dispatch(fetchTodosAsync());
  // }, [dispatch]);

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
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error loading todos.</p>}
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="bg-black text-white">
              {todo._id}
              {" text => "} {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
