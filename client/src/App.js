import "./App.css";
import Add from "./adduser/Add";
import Update from "./updateuser/Update";
import Login from "./Login/Login/Login";
import Signup from "./Login/SignUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";

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

    {
      path: "/dashboard",
      element: <DashBoard />, // Default route to Login page
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
