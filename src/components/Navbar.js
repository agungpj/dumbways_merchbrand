import React from "react";
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ImgDumbMerch from "../assets/DumbMerch.png";

import { dataLogin } from "../data/Login";

const Navbar = (props) => {
  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/">
          <img
            src={ImgDumbMerch}
            className="img-fluid"
            style={{ width: "60px", height: "60px" }}
            alt="logo"
          />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/complain"
              className={
                props?.title === "Complain"
                  ? `text-navbar-active`
                  : `text-navbar`
              }
            >
              Complain
            </Nav.Link>
            {dataLogin.isAdmin === false && (
              <Nav.Link
                as={Link}
                to="/profile"
                className={
                  props?.title === "Profile"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Profile
              </Nav.Link>
            )}
            {dataLogin.isAdmin && (
              <>
                <Nav.Link
                  as={Link}
                  to="/category"
                  className={
                    props?.title === "Category Admin"
                      ? `text-navbar-active`
                      : `text-navbar`
                  }
                >
                  Category
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/list-product"
                  className={
                    props?.title === "Product Admin"
                      ? `text-navbar-active`
                      : `text-navbar`
                  }
                >
                  Product
                </Nav.Link>
              </>
            )}
            <Nav.Link className="text-navbar">Logout</Nav.Link>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
};

export default Navbar;
