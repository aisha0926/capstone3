import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./Banner.css";
import "./Featured.css";
import { Link } from "react-router-dom";
import { Navbar, NavLink } from "react-bootstrap";

export default function Featured() {
  return (
    <div className="featured">
      <Row className="m-5">
        <Col xs={12} md={6} lg={3}>
          <Card className="featured p-3 mb-5">
            <Card.Body>
              <Card.Title>
                <h2>All Products</h2>
              </Card.Title>

              <Card.Text>View all of our amazing products</Card.Text>
              <Card.Img src="https://i.imgur.com/5jRAmwf.jpg" alt="{Image}" />
            </Card.Body>
            <Button variant="outline-warning" href="/products">
              View All Products
            </Button>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="featured p-3 mb-5">
            <Card.Body>
              <Card.Title>
                <h2>Food & Grocery</h2>
              </Card.Title>

              <Card.Text>We have the best Foods & Drinks</Card.Text>
              <Card.Img src="https://i.imgur.com/vTscdTH.jpg" alt="{Image}" />
            </Card.Body>
            <Button variant="outline-warning" href="/food">
              View All Products
            </Button>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="featured p-3 mb-5">
            <Card.Body>
              <Card.Title>
                <h2>Home & Kitchen</h2>
              </Card.Title>

              <Card.Text>Best Products for your home.</Card.Text>
              <Card.Img src="https://i.imgur.com/RIq5FWU.jpg" alt="{Image}" />
            </Card.Body>
            <Button variant="outline-warning" href="/home&kitchen">
              View All Products
            </Button>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={3}>
          <Card className="featured p-3 mb-5">
            <Card.Body>
              <Card.Title>
                <h3>Garden & Outdoors</h3>
              </Card.Title>

              <Card.Text> For your garden needs.</Card.Text>
              <Card.Img src="https://i.imgur.com/KcWJ4VP.jpg" alt="{Image}" />
            </Card.Body>
            <Button variant="outline-warning" href="/garden">
              View All Products
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
