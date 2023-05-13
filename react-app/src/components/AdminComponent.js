import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
// import UseContext from '../UserContext';

export default function AdminComponent() {
  //   console.log(user);
  const history = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categorySelected, setCategorySelected] = useState('');

  // fetch('https://aqueous-atoll-50380.herokuapp.com/products/getCategories')
  //   .then((result) => result.json())
  //   .then((data) => setCategories(data));

  const categoryData = [
    'Garden & Outdoors',
    'Toys, Children & Baby',
    'Clothes, Shoes, Jewellery & Accessories',
    'Sports & Outdoors',
    'Food & Grocery',
    'Home & Kitchen',
    'Software',
    'Computer & Accessories',
  ].sort();

  const category = categoryData.map((data, index) => {
    return (
      <option value={data} key={`seller-option-${index}`}>
        {data}
      </option>
    );
  });

  function addProduct(e) {
    e.preventDefault();
    fetch('https://aqueous-atoll-50380.herokuapp.com/seller/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        categories: categorySelected,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: 'Added product successfully',
            icon: 'success',
          });
          history('/admin');
        } else {
          Swal.fire({
            title: 'Failed in adding product',
            icon: 'error',
            text: 'Something went wrong',
          });
        }
        setName('');
        setPrice(0);
        setDescription('');
        setQuantity(0);
        // window.location.reload();
      });
  }

  return (
    <Form onSubmit={addProduct} className='mt-3 mb-5'>
      <Row xs={12} md={12}>
        <Form.Group as={Col} className='mb-3' controlId='productName'>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter company name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} className='mb-3' controlId='price'>
          <Form.Label>Price</Form.Label>
          <InputGroup className='mb-2'>
            <InputGroup.Text>£</InputGroup.Text>
            <Form.Control
              type='number'
              rows={3}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </InputGroup>
        </Form.Group>
      </Row>

      <Form.Group className='mb-3' controlId='description'>
        <Form.Label>Product description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Row className='mb-3'>
        <Form.Group as={Col} className='mb-3' controlId='quantity'>
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type='number'
            rows={3}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>Category</Form.Label>
          <Form.Select
            className='dropdownMenu'
            value={categorySelected}
            onChange={(e) => setCategorySelected(e.target.value)}
            scrollable={true}
          >
            {category}
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant='primary' type='submit'>
        Add product
      </Button>
    </Form>
  );
}
