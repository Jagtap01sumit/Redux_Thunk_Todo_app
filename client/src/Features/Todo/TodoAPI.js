export async function createTodo(userData) {
  try {
    const response = await fetch("http://localhost:8080/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    // console.log(data, "res data");

    return data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}
export const fetchTodos = async () => {
  const response = await fetch("http://localhost:8080/todos");
  console.log(response, "resooo");
  return response.json();
};

export const deleteTodo = async (id) => {
  try {
    // Send a DELETE request to your backend API endpoint
    const response = await fetch(`http://localhost:8080/${id}`, {
      method: "DELETE",
    });
    return response.data; // Optionally, return data from the response
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error; // Optionally, rethrow the error to handle it elsewhere
  }
};
