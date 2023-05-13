import { Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import SellerProductTable from '../components/SellerProductTable';
import Spinner from '../components/Spinner';

export default function SellerProducts() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(`https://aqueous-atoll-50380.herokuapp.com/seller/getSellerProduct`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);

        let products = data.map((product) => {
          return (
            <SellerProductTable
              key={product._id}
              orderProps={product}
              breakpoint={3}
            />
          );
        });

        setProductData(products);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, [productData, loading]);

  return (
    <Table striped bordered hover variant='dark'>
      <>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th colSpan={2}>Category</th>
          </tr>
        </thead>
        <tbody>{productData}</tbody>
      </>
    </Table>
  );
}
