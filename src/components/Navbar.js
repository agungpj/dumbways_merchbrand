import React from "react";
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ImgDumbMerch from "../assets/DumbMerch.png";

const Navbar = () => {
  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/">
          <img
            src={ImgDumbMerch}
            className="img-fluid"
            style={{ width: "60px", height: "60px" }}
          />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-navbar">
              Complain
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-navbar">
              Profile
            </Nav.Link>
            <Nav.Link className="text-navbar">Logout</Nav.Link>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
