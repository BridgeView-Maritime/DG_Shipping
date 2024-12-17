import "./App.css";
import Login from "./Login/Login/Login";
import Signup from "./Login/SignUp/SignUp";
import CrewDetails from "./crew/SeafarerProfile.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Crew from "./crew/SeafarerProfile.jsx";
import VesselVendor from "./Vessel_Manager/VesselVendor.jsx";
import ManningAggrement from "./Vessel_Owner/ManningAggrement/ManningAggrement.jsx";
import HomePage from "./Homepage/HomePage.jsx";
import ShipDetailsDisplay from "./Vessel_Owner/VesselTable/VesselTable.jsx";
import ManningAggrementDisplay from "./Vessel_Owner/ManningAggrementDisplay/ManningAggrementDisplay.jsx";
import VesselOwnerTable from "./Vessel_Owner/VesselOwnerTable/VesselOwnerTable.jsx";
import VesselOwnerForm from "./Vessel_Owner/VesselOwnerForm/VesselOwnerForm.jsx";
import VesselForm from "./Vessel_Owner/VesselForm/VesselForm.jsx";
import VesselTable from "./Vessel_Owner/VesselTable/VesselTable.jsx";

function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
      path: "/crew",
      element: <Crew />,
    },
    {
      path: "/Vesselvendor",
      element: <VesselVendor />,
    },
    {
      path: "/vessel_owner_table",
      element: <VesselOwnerTable />,
    },
    {
      path: "/vessel_owner_form",
      element: <VesselOwnerForm />
    },
    {
      path: "/SeafarerProfile",
      element: <CrewDetails />,
    },
    {
      path: "/manningAggrement",
      element: <ManningAggrement />,
    },
    {
      path: "/vessel",
      element: <VesselForm />,
    },
    {
      path : "/vessel_Table",
      element: <VesselTable />
    },
    {
      path: "/ShipDetailsDisplay",
      element: <ShipDetailsDisplay />,
    },
    {
      path: "/ManningAggrementDisplay",
      element: <ManningAggrementDisplay />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
