import React from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./ProductCard.css";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function ProductCard(props) {
  const { user } = useContext(UserContext);
  const { breakpoint, productProps } = props;
  const { name, description, price, _id, categories } = productProps;
  console.log(productProps);
  console.log(user);

  return (
    <Col xs={12} md={breakpoint}>
      <Card className="card_product">
        <Card.Body>
          <div className="title_card">
            <h1>{name}</h1>
          </div>
          <hr />
          <Card.Subtitle>{categories}</Card.Subtitle>
          <h4>
            For only <strong className="price_tag">${price}</strong>
          </h4>
          {/* <Card.Text>Stocks available: {quantity}</Card.Text> */}
          <Card.Img
            style={{ width: "6rem", float: "left" }}
            src="https://cdn-icons-png.flaticon.com/512/4539/4539003.png"
            alt="{Image}"
          />
          <Button className="m-1" variant="success">
            Add
            <BsCart4 />
          </Button>
          <Link className="btn btn-warning m-1" to={`/products/${_id}`}>
            View
            <GrOverview />
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}
