import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/users/Users";
import CreateUser from "./pages/Dashboard/users/CreateUser";
import EditUser from "./pages/Dashboard/users/EditUser";

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
      { path: "users", element: <Users /> },
      { path: "users/add", element: <CreateUser /> },
      { path: "edit-user/:id", element: <EditUser /> },
    ],
  },
]);

export default appRoute;
