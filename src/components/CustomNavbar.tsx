import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiPhone, BiSolidUser } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLogout } from "react-icons/ai";
import { BsFacebook, BsFillLockFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { loginAction } from "../app/features/users/usersSlice";
import { useGetProfileQuery } from "../app/features/users/userApi";
import { Spin } from "antd";
import { userRole } from "../assets/constant";

const CustomNavbar = () => {
  const user = useAppSelector((state) => state.user);
  const { data: profile, isLoading } = useGetProfileQuery("");

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(loginAction({ token: "" }));
  };

  return (
    <Spin spinning={isLoading}>
      <div className="custom_nav py-3" style={{ background: "rgb(0 0 0 / 75%)", height: "165px" }}>
        <Container>
          <div className="d-flex justify-content-between text-white pt-3">
            {/* left */}
            <div>
              <div className="d-inline-block me-5">
                <span className="fs-4 me-1">
                  <BiPhone />
                </span>
                <span> +881700 000000 </span>
              </div>
              <div className="d-inline-block me-5">
                <span className="fs-4 me-1">
                  <CiMail />
                </span>
                <span> +881700 000000 </span>
              </div>
            </div>
            {/* right */}
            <div className="d-flex align-items-center">
              <div className="ms-4">
                <span className="text-primary fs-5">
                  <BsFacebook />
                </span>
              </div>
              <div className="ms-4">
                <span className="text-primary fs-5">
                  <AiOutlineTwitter />
                </span>
              </div>
              <div className="ms-4">
                <span className="text-primary fs-5">
                  <AiOutlineWhatsApp />
                </span>
              </div>

              {user.isLogin ? (
                <>
                  {profile?.success &&
                  (profile.data?.role === userRole.admin ||
                    profile.data?.role === userRole.superAdmin) ? (
                    <NavLink to="/dashboard" className="ms-4 text-white text-center">
                      <span className="text-primary fs-5 pe-2">{/* <BsFillLockFill /> */}</span>
                      Dashboard
                    </NavLink>
                  ) : (
                    ""
                  )}

                  <Button
                    className="nav-link btn text-danger fw-bold ms-4 text-center"
                    style={{ background: "transparent" }}
                    onClick={handleLogout}
                  >
                    <span className="text-primary fs-5 pe-2">
                      <AiOutlineLogout />
                    </span>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="ms-4 text-white text-center">
                    <span className="text-primary fs-5 pe-2">
                      <BsFillLockFill />
                    </span>
                    Login
                  </NavLink>

                  <NavLink to="/register" className="ms-4 text-white text-center">
                    <span className="text-primary fs-5 pe-2">
                      <BiSolidUser />
                    </span>
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </Container>
        <hr className="border-white mb-0" />
        <Container>
          <Navbar expand="lg" data-bs-theme="dark">
            <NavLink className="navbar-brand" to="/">
              <div className="fw-bold fs-4">
                Hidden<span className="text-primary">World</span>
              </div>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Packages
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Destinations
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Available Service
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Upcoming Service
                </NavLink>
                <NavLink className="nav-link" to="/">
                  Blogs
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </Spin>
  );
};

export default CustomNavbar;
