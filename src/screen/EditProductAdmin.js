import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function EditProductAdmin() {
  const title = "Product Admin";
  document.title = "DumbMerch | " + title;

  let navigate = useNavigate();

  return (
    <>
      <Navbar title={title} />
      <Container className="py-5">
        <Row>
          <Col xs="12">
            <div className="text-header-category mb-4">Update Product</div>
          </Col>
          <Col xs="12">
            <form>
              <div>Product.png</div>

              <input type="file" id="upload" name="image" hidden />
              <label for="upload" className="label-file-add-product">
                Upload file
              </label>
              <input
                type="text"
                placeholder="Product Name"
                name="name"
                className="input-edit-category mt-4"
              />
              <textarea
                placeholder="Product Desc"
                name="desc"
                className="input-edit-category mt-4"
                style={{ height: "130px" }}
              ></textarea>
              <input
                type="number"
                placeholder="Price (Rp.)"
                name="price"
                className="input-edit-category mt-4"
              />
              <input
                type="number"
                placeholder="Stock"
                name="qty"
                className="input-edit-category mt-4"
              />

              <div className="card-form-input mt-4 px-2 py-1 pb-2">
                <div
                  className="text-secondary mb-1"
                  style={{ fontSize: "15px" }}
                >
                  Category
                </div>

                <label className="checkbox-inline me-4">
                  <span className="ms-2">
                    Keyboard Logitech G30SPKI WIRELESS
                  </span>
                </label>
              </div>

              <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Save
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default EditProductAdmin;
