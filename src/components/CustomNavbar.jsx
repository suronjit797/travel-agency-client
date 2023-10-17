import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "react-bootstrap";
const CustomNavbar = () => {
  const { data } = useSession();
  const session = data?.token;

  const handleLogout = () => {
    signOut(); // Call the signOut function to log the user out
  };

  return (
    <div className="custom_nav">
      <div className="d-flex">
        <div>
          
        </div>
        <div></div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link className="navbar-brand" href="/">
            {" "}
            <div className="fw-bold">Travel Service</div>{" "}
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/login">
                Link
              </Link>
              <Button
                className="nav-link btn text-danger fw-bold"
                style={{ background: "transparent" }}
                onClick={handleLogout}
              >
                Logout
              </Button>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
