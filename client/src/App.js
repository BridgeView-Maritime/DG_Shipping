import "./App.css";
import Add from "./adduser/Add";
import Update from "./updateuser/Update";
import Login from "./Login/Login/Login";
import Signup from "./Login/SignUp/SignUp";
import CrewDetails from "./crew/SeafarerProfile.jsx";  
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import CompanyProfile from "./RPSL Vendor/CompanyProfile/CompanyProfile";
import Crew from "./crew/SeafarerProfile.jsx";
import VerselVendor from "./Versel Vendor/VerselVendor";
import RpsDashboard from "./RPSL Vendor/RPS DashBoard/RpsDashboard";
import CompanyProfileDisplay from "./RPSL Vendor/CompanyProfileDisplay/CompanyProfileDisplay";
// import FileUpload from "./FileUpload.jsx";

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
    {
      path: "/companyprofile",
      element: <CompanyProfile />
    },
    {
      path:"/crew",
      element:<Crew />
    },
    {
      path:"/verselvendor",
      element: <VerselVendor />
    },
    {
      path: "/rpsdashboard",
      element: <RpsDashboard />
    },
    {
      path: "/companyprofiledisplay",
      element: <CompanyProfileDisplay /> 
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
