import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

export default function ProductAdmin() {
  let navigate = useNavigate();

  const handleDelete = () => {
    return "Helo";
  };

  const handleClose = () => {
    return "Helo";
  };

  const title = "Product Admin";
  document.title = "DumbMerch | " + title;

  const addProduct = () => {
    navigate("/add-product");
  };

  const handleUpdate = () => {
    navigate("/update-product/");
  };

  // Create function handle get id product & show modal confirm delete data here ...

  // Create function for handle delete product here ...
  // If confirm is true, execute delete data

  // Call function for handle close modal and execute delete data with useEffect here ...

  return (
    <>
      <Navbar title={title} />

      <Container className="py-5">
        <Row>
          <Col xs="6">
            <div className="text-header-category mb-4">List Product</div>
          </Col>
          <Col xs="6" className="text-end">
            <Button
              onClick={addProduct}
              className="btn-dark"
              style={{ width: "100px" }}
            >
              Add
            </Button>
          </Col>
          <Col xs="12">
            <Table striped hover size="lg" variant="dark">
              <thead>
                <tr>
                  <th width="1%" className="text-center">
                    No
                  </th>
                  <th>Photo</th>
                  <th>Product Name</th>
                  <th>Product Desc</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle text-center">1</td>
                  <td className="align-middle">Photo.jpg</td>
                  <td className="align-middle">
                    {" "}
                    Keyboard Logitech G30SPKI WIRELESS
                  </td>
                  <td className="align-middle">
                    Lorem ipsum dolor sit amet....
                  </td>
                  <td className="align-middle">Rp. 3.100.000,00</td>
                  <td className="align-middle">200</td>
                  <td className="align-middle">
                    <Button
                      onClick={() => {
                        handleUpdate();
                      }}
                      className="btn-sm btn-success me-2"
                      style={{ width: "135px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="btn-sm btn-danger"
                      style={{ width: "135px" }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
