import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/Navbar";
import imgDumbMerch from "../assets/DumbMerch.png";
import profile from "../assets/profile.jpg";
import product1 from "../assets/product1.png";

const Profile = () => {
  const title = "Profile";
  document.title = "DumbMerch | " + title;

  return (
    <>
      <Navbar title={title} />
      <Container className="my-5">
        <Row>
          <Col md="6">
            <div className="text-header-product mb-4">My Profile</div>
            <Row>
              <Col md="6">
                <img src={profile} className="img-fluid rounded" alt="avatar" />
              </Col>
              <Col md="6">
                <div className="profile-header">Name</div>
                <div className="profile-content">Agung Prasetya Jati</div>

                <div className="profile-header">Email</div>
                <div className="profile-content">
                  agungprasetya1121@gmail.com
                </div>

                <div className="profile-header">Phone</div>
                <div className="profile-content">083895931367</div>

                <div className="profile-header">Gender</div>
                <div className="profile-content">Male</div>

                <div className="profile-header">Address</div>
                <div className="profile-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nisi, explicabo.
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <div className="text-header-product mb-4">My Transaction</div>
            <div style={{ background: "#303030" }} className="p-2 mb-1">
              <Container fluid className="px-1">
                <Row>
                  <Col xs="3">
                    <img
                      src={product1}
                      alt="img"
                      className="img-fluid"
                      style={{
                        height: "120px",
                        width: "170px",
                        objectFit: "cover",
                      }}
                    />
                  </Col>
                  <Col xs="6">
                    <div
                      style={{
                        fontSize: "18px",
                        color: "#F74D4D",
                        fontWeight: "500",
                        lineHeight: "19px",
                      }}
                    >
                      Keyboard Logitech G30SPKI WIRELESS
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontSize: "14px",
                        color: "#F74D4D",
                        fontWeight: "300",
                        lineHeight: "19px",
                      }}
                    >
                      1 April 2020
                    </div>

                    <div
                      className="mt-3"
                      style={{
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      Price : Rp. 3.100.000,00
                    </div>

                    <div
                      className="mt-3"
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      Total : Rp. 3.100.000,00
                    </div>
                  </Col>
                  <Col
                    xs="3"
                    className="d-flex"
                    style={{ alignItems: "center" }}
                  >
                    <img
                      src={imgDumbMerch}
                      alt="img"
                      style={{ maxHeight: "60px" }}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
