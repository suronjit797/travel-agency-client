import React, { ReactNode } from "react";
import { Link, Navigate } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import { PiUserCircleThin } from "react-icons/pi";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginAction } from "../app/features/users/usersSlice";
import { useGetProfileQuery } from "../app/features/users/userApi";
import { userRole } from "../assets/constant";

interface TProps {
  children: ReactNode;
}

const AdminLayout: React.FC<TProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { data: profile, isLoading, refetch } = useGetProfileQuery("");
  const user = useAppSelector((state) => state.user);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },

    {
      key: "4",
      danger: true,
      label: "Logout",
      onClick: () => {
        dispatch(loginAction({ token: "" }));
      },
    },
  ];

  if (isLoading) {
    return "...loading";
  }

  if (!user.isLogin) {
    return <Navigate to="/login" replace={true} />;
  }
  if (!profile?.success) {
    refetch();
  } else if (
    profile?.data?.role !== userRole.admin ||
    profile?.data?.role !== userRole.superAdmin
  ) {
    <Navigate to="/" replace={true} />;
  }

  return (
    <div className="admin_layout">
      <div className="contain">
        <nav className="admin_layout_nav">
          <AdminNav />
        </nav>
        <main className="content">
          <div className="d-flex">
            <div className="ms-auto fs-4" style={{ cursor: "pointer" }}>
              <Dropdown menu={{ items }}>
                <PiUserCircleThin />
              </Dropdown>
            </div>
          </div>
          <div className="border border-1 p-3 my-3 rounded-2">{children}</div>
          <hr className="mt-auto" />
          <footer className="text-center">
            {new Date().getFullYear()} &copy; All right reserve by suronjit pal
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
