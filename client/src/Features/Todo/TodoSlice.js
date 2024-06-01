import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchTodos } from "./TodoAPI";

const initialState = {
  todos: [{}],
  status: "idle",
  listLoad: false,
  error: null,
};

export const createTodoAsync = createAsyncThunk(
  "todos/createTodo",
  async (todo) => {
    console.log(todo);
    const response = await createTodo(todo);
    console.log(response, "res");
    return response.savedTodo;
  }
);
export const fetchTodosAsync = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetchTodos();
    return response;
  }
);
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (id) => {
    console.log(id, "slice id");
    const response = await deleteTodo(id);
    console.log(response.data, "res data");
    console.log(response, "res ");
    return id;
  }
);
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";
        if (!Array.isArray(state.todos)) {
          state.todos = [];
        }
        console.log(action.payload, "paylode");
        state.todos.push(action.payload); // Push new todo into the todos array
      })
      .addCase(createTodoAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchTodosAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload.todos;
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTodoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.status = "idle";

        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })

      .addCase(deleteTodoAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
