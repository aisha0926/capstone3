import { useState, useEffect } from 'react';
import CheckoutOrders from '../components/CheckoutOrders';
import { Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './GetOrders.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container } from 'react-bootstrap';

// hello
export default function GetOrders({ order }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('https://aqueous-atoll-50380.herokuapp.com/customer/getSingleUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item) => {
          setOrders(
            item.orders.map((product) => {
              console.log(product);
              return (
                <CheckoutOrders
                  key={product._id}
                  orderProps={product.productPrice}
                  breakpoint={2}
                />
              );
            })
          );
        });
      });
  }, [order]);

  return (
    <Container>
      <div className='bg-catalog'>
        <div className='bg-catalog-inner'>
          <br />
          <Breadcrumb>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href='/products'>All Products</Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
          </Breadcrumb>
          <h2 className='m-5 text-warning'>My Cart</h2>
          <Row className='m-5'>{orders}</Row>
        </div>
      </div>
    </Container>
  );
}
