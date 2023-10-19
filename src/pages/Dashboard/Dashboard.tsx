import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};

export default Dashboard;
