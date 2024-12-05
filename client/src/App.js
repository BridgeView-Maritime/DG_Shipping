import "./App.css";
import Add from "./adduser/Add";
import User from "./getuser/User";
import Update from "./updateuser/Update";
import CrewDetails from "./crew/SeafarerProfile.jsx";  
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
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
      path: "/SeafarerProfile",  
      element: <CrewDetails />,  
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
