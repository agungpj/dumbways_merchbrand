import React from "react";
import { productList } from "../utils/dataProduct";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const title = "Detail Product";
  document.title = "DumbMerch | " + title;
  const { id } = useParams();
  const product = productList.data.find((prod) => prod.id === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <Navbar title={title} />
      <Container className="py-5">
        <Row>
          <Col md="2"></Col>
          <Col md="3">
            <img src={product?.image} className="img-heading my-5" />
          </Col>
          <Col md="5" className="px-3">
            <div className="text-header-product-detail">{product?.name}</div>
            <div className="text-content-product-detail">
              Stock : {product?.stock}
            </div>
            <p className="mt-4 justify-align">{product?.desc}</p>
            <div className="text-price-product-detail text-end mt-4">
              {convertRupiah.convert(product?.price)}
            </div>
            <div className="d-grid gap-2 mt-5">
              <button className="btn btn-buy">Buy</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductScreen;
