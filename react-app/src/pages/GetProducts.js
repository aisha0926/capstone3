import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Row } from 'react-bootstrap';
import './ProductGet.css';
import React from 'react';
import Carousel from 'better-react-carousel';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';

export default function GetProducts({ product }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-atoll-50380.herokuapp.com/products/viewAll')
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
    <div className='bg-catalog'>
      <Container>
        <br />
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>All Products</Breadcrumb.Item>
        </Breadcrumb>

        <Carousel cols={1} rows={1} gap={10} loop>
          <Carousel.Item>
            <img
              href='/'
              alt=''
              width='100%'
              src='https://i.imgur.com/MQGdOnB.jpg'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              href='/'
              alt=''
              width='100%'
              src='https://i.imgur.com/kxgD92W.jpg'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              href='/'
              alt=''
              width='100%'
              src='https://i.imgur.com/eSOcXoG.jpg'
            />
          </Carousel.Item>
        </Carousel>

        <div className='bg-catalog-inner'>
          <Row className='m-5'>{products}</Row>
        </div>
      </Container>
    </div>
  );
}
