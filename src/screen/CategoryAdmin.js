import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

// import DeleteData from "../components/modal/DeleteData";

import imgEmpty from "../assets/empty.svg";

import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function CategoryAdmin() {
  const navigate = useNavigate();
  const handleDelete = () => {
    return "Helo";
  };

  const handleClose = () => {
    return "Helo";
  };

  const title = "Category Admin";
  document.title = "DumbMerch | " + title;

  const addCategory = () => {
    navigate("/add-category");
  };

  const handleEdit = (id) => {
    navigate(`/update-category`);
  };
  return (
    <>
      <Navbar title={title} />

      <Container className="py-5">
        <Row>
          <Col>
            <div className="text-header-category mb-4">List Category</div>
          </Col>
          <Col className="text-end">
            <Button
              onClick={addCategory}
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
                  <th>No</th>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="10%" className="align-middle">
                    1
                  </td>
                  <td width="60%" className="align-middle">
                    Keyboard Logitech G30SPKI WIRELESS
                  </td>
                  <td width="30%">
                    <Button
                      className="btn-sm btn-success me-2"
                      style={{ width: "135px" }}
                      onClick={() => {
                        handleEdit();
                      }}
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
