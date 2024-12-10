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
import ManningAggrement from "./RPSL Vendor/ManningAggrement/ManningAggrement.jsx";
import HomePage from "./Homepage/HomePage.jsx";


function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/login",
      element: <Login />, 
    },
    {
      path: "/signup",
      element: <Signup />,
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
      element: <DashBoard />, 
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
    {
       path : "/manningAggrement",
       element: <ManningAggrement />
    },
    

  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
