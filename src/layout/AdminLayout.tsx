import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface TProps {
  children: ReactNode;
}

const AdminLayout: React.FC<TProps> = ({ children }) => {
  return (
    <div className="admin_layout">
      <div className="container">
        <nav className="nav">
          <ul className="navList">
            <li className="navItem">
              <Link className="navLink" to="/admin">
                <h3 className="mb-0 text-center fw-bold mt-2"> Admin </h3>
              </Link>
            </li>
            <hr className="my-1 border-white" />

            <li className="navItem">
              <Link className="navLink" to="/admin/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="navItem">
              <Link className="navLink" to="/admin/users">
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <main className="content">
          {children}
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
