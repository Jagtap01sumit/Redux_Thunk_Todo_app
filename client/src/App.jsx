import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
