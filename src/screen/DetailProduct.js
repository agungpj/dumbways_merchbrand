import React from "react";
import { productList } from "../utils/dataProduct";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import convertRupiah from "rupiah-format";

const ProductScreen = (props) => {
  const product = productList.data.find(
    (product) => product.id === props.match.params.id
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1>{product.price}</h1>
      </div>
    </div>
    // <div>
    //   <Navbar />
    //   <Container className="py-5">
    //     <Row>
    //       <Col md="2"></Col>
    //       <Col md="3">
    //         <img src={product?.image} className="img-fluid" />
    //       </Col>
    //       <Col md="5">
    //         <div className="text-header-product-detail">{product?.name}</div>
    //         <div className="text-content-product-detail">
    //           Stock : {product?.qty}
    //         </div>
    //         <p className="text-content-product-detail mt-4">{product?.desc}</p>
    //         <div className="text-price-product-detail text-end mt-4">
    //           {convertRupiah.convert(product?.price)}
    //         </div>
    //         <div className="d-grid gap-2 mt-5">
    //           <button className="btn btn-buy">Buy</button>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  );
};

export default ProductScreen;
