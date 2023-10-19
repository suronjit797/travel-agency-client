import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/users/Users";
import CreateUser from "./pages/Dashboard/users/CreateUser";
import EditUser from "./pages/Dashboard/users/EditUser";
import HomePackages from "./pages/Home/HomePackages";
import CreatePackages from "./pages/Dashboard/packages/CreatePackages";
import EditPackages from "./pages/Dashboard/packages/EdiPackages";
import Packages from "./pages/Dashboard/packages/Packages";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "", element: "hello admin" },
      // users
      { path: "users", element: <Users /> },
      { path: "users/add", element: <CreateUser /> },
      { path: "edit-user/:id", element: <EditUser /> },
      // packages
      { path: "packages", element: <Packages /> },
      { path: "packages/add", element: <CreatePackages /> },
      { path: "edit-packages/:id", element: <EditPackages /> },
    ],
  },
]);

export default appRoute;
