import React from "react";
import { Row, Col } from "react-bootstrap";
import { products, ProductInterface } from "../Products";

const Product = ({ product }: { product: ProductInterface }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.description} />
    </div>
  );
};
export const HomeScreen = () => {
  return (
    <section>
      <h1>Home Screen</h1>
      <h2>MVP: can order a t-shirt</h2>
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
