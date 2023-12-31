import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import backgroundImage from "../assets/images/header.webp";

function Header() {
  return (
    <header style={{ backgroundImage: `url(${backgroundImage})`, minHeight: "100vh" }}>
      <CustomNavbar />
      <Container>
        <div
          className="text-white fw-bold d-flex justify-content-center flex-column"
          style={{ height: "calc(100vh - 165px)" }}
        >
          <h3> OPEN YOUR EYES FOR </h3>
          <h1 style={{ fontSize: "72px" }}> The Hidden World </h1>
        </div>
      </Container>
    </header>
  );
}

export default Header;
