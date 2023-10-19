import React from "react";
import { Link, NavLink } from "react-router-dom";

const pages = [
  {
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    link: "/dashboard/users",
    name: "Users",
  },
  {
    link: "/dashboard/projects",
    name: "Projects",
  },
];

const AdminNav = () => {
  return (
    <>
      <ul className="navList">
        <li className="navItem">
          <Link className="navLink" to="/admin">
            <h3 className="mb-0 text-center fw-bold mt-2"> Admin </h3>
          </Link>
        </li>
        <hr className="my-1 border-white" />

        {pages.map((page) => (
          <li className="navItem">
            <NavLink className="navLink" to={page.link}>
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AdminNav;
