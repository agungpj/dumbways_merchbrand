import React from "react";
import styled from "styled-components";
import { Container, Col, Row } from "react-bootstrap";
import { productList } from "../utils/dataProduct";
import convertRupiah from "rupiah-format";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { product } = props;
  return (
    <>
      <div key={product.id} className="bg-products order-border">
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: "none", cursor: "pointer" }}
        >
          <img src={product.image} className="w-100" alt="product"></img>
          <div className="px-4 py-2">
            <h5 className="fw-bold pt-3 products-text pb-1">{product.name}</h5>

            <div style={{ color: "white" }}>
              {convertRupiah.convert(product.price)}
            </div>
            <p style={{ color: "white" }}>Stok : {product.stock}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
