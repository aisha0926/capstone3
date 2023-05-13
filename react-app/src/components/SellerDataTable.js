import { Form } from 'react-bootstrap';
import { useContext, useState } from 'react';
import UserContext from '../UserContext';

export default function SellerData() {
  const { user } = useContext(UserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  fetch(
    `https://aqueous-atoll-50380.herokuapp.com/seller/getSingleSeller/${user.id}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setName(data.name);
      setEmail(data.email);
      setDescription(data.description);
    });

  return (
    <Form style={{ height: '100vh' }}>
      <Form.Group className='mb-3' controlId='formGroupEmail'>
        <Form.Label>Company Name</Form.Label>
        <h2>{name}</h2>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formGroupPassword'>
        <Form.Label>Company Email</Form.Label>
        <h2>{email}</h2>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formGroupPassword'>
        <Form.Label>Description</Form.Label>
        <h2>{description}</h2>
      </Form.Group>
    </Form>
  );
}
