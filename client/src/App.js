import "./App.css";
import Login from "./Login/Login/Login";
import Signup from "./Login/SignUp/SignUp";
import CrewDetails from "./crew/SeafarerProfile.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Crew from "./crew/SeafarerProfile.jsx";
import ManningAggrement from "./Vessel_Owner/ManningAggrement/ManningAggrement.jsx";
import HomePage from "./Homepage/HomePage.jsx";
import ManningAggrementDisplay from "./Vessel_Owner/ManningAggrementDisplay/ManningAggrementDisplay.jsx";
import VesselOwnerTable from "./Vessel_Owner/VesselOwnerTable/VesselOwnerTable.jsx";
import VesselOwnerForm from "./Vessel_Owner/VesselOwnerForm/VesselOwnerForm.jsx";
import VesselForm from "./Vessel_Owner/VesselForm/VesselForm.jsx";
import VesselTable from "./Vessel_Owner/VesselTable/VesselTable.jsx";
import VesselMangerForm from "./Vessel_Manager/VesselMangerForm/VesselMangerForm.jsx";
import CrewingAgentTable from "./Crewing_Agent/Crewing_agent_table/CrewingAgentTable.jsx";
import CrewingAgentForm from "./Crewing_Agent/Crewing_agentForm/CrewingAgentForm.jsx";
import VesselManagerTable from "./Vessel_Manager/VesselMangerTable/VesselMangerTable.jsx";

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
      path: "/vessel_owner_table",
      element: <VesselOwnerTable />,
    },
    {
      path: "/vesselownerform",
      element: <VesselOwnerForm />,
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
      path: "/vessel_Table",
      element: <VesselTable />,
    },
    {
      path: "/ManningAggrementDisplay",
      element: <ManningAggrementDisplay />,
    },
    //vessel Manger routes
    {
      path: "/VesselMangerForm",
      element: <VesselMangerForm />,
    },
    {
      path: "/VesselManagerTable",
      element: <VesselManagerTable />
    },
    //Crewing_Agent routes
    {
      path: "/Crewing_Agent",
      element: <CrewingAgentForm />,
    },
    {
      path: "/CrewingAgentTable",
      element: <CrewingAgentTable />,
    },
    // Vessel route with dynamic ID
    {
      path: "/vessel/:id",
      element: <VesselForm />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
