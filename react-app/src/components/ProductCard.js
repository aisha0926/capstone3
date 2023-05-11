import React from "react";
import { Button, Col, Row, Card, Modal } from "react-bootstrap";
import { GrOverview } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./ProductCard.css";
import UserContext from "../UserContext";
import { useContext, useState } from "react";

export default function ProductCard(props) {
  const { user } = useContext(UserContext);
  const { breakpoint, productProps } = props;
  const { name, description, price, _id, categories, quantity } = productProps;
  console.log(productProps);
  console.log(user);

  // modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs={12} md={breakpoint}>
        <Card className="card_product">
          <Card.Body>
            <div className="title_card">
              <h4>
                {name} <br /> <h6>Price: ${price}</h6>
              </h4>
            </div>
            <hr />
            <Card.Img
              className="product-photo-logo"
              style={{ width: "8rem" }}
              src="https://place-puppy.com/300x300"
              alt="product-photo"
            />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="mute"
              className="button-product-footer"
              onClick={handleShow}
            >
              Check Details
            </Button>
          </Card.Footer>
        </Card>
      </Col>
      {/*modal*/}

      <Modal show={show} onHide={handleClose} className="card_product_modal">
        <Modal.Header closeButton>
          <Modal.Title className="product-name-modal">
            <h1>{name}</h1>
          </Modal.Title>
        </Modal.Header>
        <img
          className="img-dog"
          src="https://place-puppy.com/300x300"
          thumbnail
        />
        <h2 className="priceh2">$ {price}</h2>
        <h3>
          <BsCart4 />
          {categories}
        </h3>

        <p className="des-prod">{description}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link className="btn btn-warning" to={`/products/${_id}`}>
            More Info
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}
