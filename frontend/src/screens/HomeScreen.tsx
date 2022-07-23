import React from "react";
import { Row, Col } from "react-bootstrap";
import { products } from "../Products";
import { Product } from "../components/Product";

export const HomeScreen = () => {
  return (
    <section>
      <h1>Home Screen</h1>
      <Row>
        {products.map((product, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={"product" + index} product={product} />
          </Col>
        ))}
      </Row>
    </section>
  );
};
