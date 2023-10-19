import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BiPhone, BiSolidUser } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLogout } from "react-icons/ai";
import { BsFacebook, BsFillLockFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useAppSelector } from "../app/hooks";

const CustomNavbar = () => {
  const user = useAppSelector((state) => state.user);
  const handleLogout = () => {};

  return (
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

            <Link to="/register" className="ms-4 text-white text-center">
              <span className="text-primary fs-5 pe-2">
                <BiSolidUser />
              </span>
              Register
            </Link>

            {!user.isLogin ? (
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
            ) : (
              <Link to="/login" className="ms-4 text-white text-center">
                <span className="text-primary fs-5 pe-2">
                  <BsFillLockFill />
                </span>
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
      <hr className="border-white mb-0" />
      <Container>
        <Navbar expand="lg" data-bs-theme="dark">
          <Link className="navbar-brand" to="/">
            <div className="fw-bold fs-4">
              Hidden<span className="text-primary">World</span>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/">
                Packages
              </Link>
              <Link className="nav-link" to="/">
                Destinations
              </Link>
              <Link className="nav-link" to="/">
                Available Service
              </Link>
              <Link className="nav-link" to="/">
                Upcoming Service
              </Link>
              <Link className="nav-link" to="/">
                Blogs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default CustomNavbar;
