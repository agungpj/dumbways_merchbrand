import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { productList } from "../utils/dataProduct";
import Card from "../components/Card";

const PrivateScreen = () => {
  const title = "Homescreen";
  document.title = "DumbMerch | " + title;
  return (
    <>
      <div>
        <Navbar title={title} />
        <Container className="mt-5">
          <Row>
            <Col>
              <div className="text-header-product">Product</div>
            </Col>
          </Row>
          <Row className="my-4">
            {productList.data.map((product) => (
              <Col md={3}>
                <Card product={product} key={product.id} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PrivateScreen;
