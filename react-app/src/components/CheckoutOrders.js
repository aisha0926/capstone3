import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";
import "./CheckoutOrders.css";
import UserContext from "../UserContext";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";

export default function CheckoutOrders(orderProps) {
  const { user } = useContext(UserContext);
  const { breakpoint } = orderProps;
  const { productName, productPrice } = orderProps.orderProps;

  return (
    <Col className="name-product-order">
      <h3>
        <AiFillStar />
        {productName}
      </h3>
      <h4>
        <BsCurrencyDollar />
        {productPrice}
      </h4>
      <hr />
    </Col>
  );
}
