import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Row, Container } from "react-bootstrap";
import "./ProductGet.css";
import { Breadcrumb } from "react-bootstrap";
import Carousel from "better-react-carousel";

export default function Software({ product }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products/search/Home & Kitchen")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const allProducts = data.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productProps={product}
              breakpoint={3}
            />
          );
        });
        setProducts(allProducts);
      });
  }, [product]);

  return (
    <Container>
      <div className="bg-catalog">
        <div className="bg-catalog-inner">
          <br />
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Home & Kitchen</Breadcrumb.Item>
          </Breadcrumb>
          <Carousel cols={1} rows={1} gap={10} loop>
            <Carousel.Item>
              <img
                href="/"
                alt=""
                width="100%"
                src="https://i.imgur.com/MQGdOnB.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                href="/"
                alt=""
                width="100%"
                src="https://i.imgur.com/kxgD92W.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                href="/"
                alt=""
                width="100%"
                src="https://i.imgur.com/eSOcXoG.jpg"
              />
            </Carousel.Item>
          </Carousel>
          <Row className="m-5">{products}</Row>
        </div>
      </div>
    </Container>
  );
}
