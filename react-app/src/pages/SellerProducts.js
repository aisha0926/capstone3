import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import SellerProductTable from "../components/SellerProductTable";

export default function SellerProducts() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/seller/getSellerProduct`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        let products = data.map((product) => {
          // console.log(product);
          return (
            <SellerProductTable
              key={product._id}
              orderProps={product}
              breakpoint={3}
            />
          );
        });
        // console.log(products);
        setProductData(products);

        // console.log(productData);
      });
  }, []);

  return (
    <Table striped bordered hover variant="dark">
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
    </Table>
  );
}
