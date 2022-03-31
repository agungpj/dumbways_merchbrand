import React from 'react';
import {Form, Col, Row, Container, Image, Button} from 'react-bootstrap';

const addProductScreen = () => {
  return <>
     <Container className="pb-5">
            <Row className='d-flex justify-content-between'>
                <Col>
                    <h2 className='text-red fw-bold'>Product</h2>
                    <Form>
                    <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="productname" className='border-2 b-red bg-soft-red' placeholder="Prodcut Name" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
                <Form.Control type="number" name="price" className='border-2 b-red bg-soft-red' placeholder="Price" />
            </Form.Group>
            <Form.Group className="mb-5 w-100 bg-soft-red border border-2 b-red px-2 d-flex justify-content-between align-items-center" controlId="exampleForm.ControlInput1">
                <p className='text-secondary'>Photo Product</p>
                <Form.Label for='picture'>
                    <Image src="/img/file.svg"></Image>
                </Form.Label>
                <Form.Control type="file" name="image" id='picture' className='border-2 b-red bg-soft-red' placeholder="Photo Product" hidden />
            </Form.Group>
                        <Button type='submit' className='bg-red text-light fw-bold w-100'>Add Product</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <Image src="/img/product-hero.svg"></Image>
                </Col>
            </Row>
        </Container>
  </>;
};

export default addProductScreen;

