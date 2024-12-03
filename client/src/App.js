import "./App.css";
import Add from "./adduser/Add";
import Update from "./updateuser/Update";
import Login from "./Login/Login/Login";
import Signup from "./Login/SignUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />, // Default route to Login page
    },
    {
      path: "/signup",
      element: <Signup />, // Route for Signup page
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/update/:id",
      element: <Update />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
