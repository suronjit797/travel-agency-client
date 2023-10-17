import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { BiPhone, BiSolidUser } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineLogout } from "react-icons/ai";
import { BsFacebook, BsFillLockFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const CustomNavbar = () => {
  const { data, status } = useSession();
  const session = data?.token;

  const handleLogout = () => {
    signOut(); // Call the signOut function to log the user out
  };

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

            <Link href="/register" className="ms-4 text-white text-center">
              <span className="text-primary fs-5 pe-2">
                <BiSolidUser />
              </span>
              Register
            </Link>

            {status === "authenticated" ? (
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
              <Link href="/login" className="ms-4 text-white text-center">
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
          <Link className="navbar-brand" href="/">
            <div className="fw-bold fs-4">
              Hidden<span className="text-primary">World</span>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/">
                Packages
              </Link>
              <Link className="nav-link" href="/">
                Destinations
              </Link>
              <Link className="nav-link" href="/">
                Available Service
              </Link>
              <Link className="nav-link" href="/">
                Upcoming Service
              </Link>
              <Link className="nav-link" href="/">
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
