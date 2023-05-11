import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import UserContext from '../UserContext';
import { Navigate } from 'react-router-dom';

import Tablayout from '../components/Tablayout';

export default function AdminDashboard() {
  const { user } = useContext(UserContext);
  console.log(user.isAdmin);

  return user.isAdmin ? (
    <Container>
      <h1 className='mt-5 mb-3 text-center'>Admin Dashboard</h1>
      <hr className='mb-5'></hr>
      <Tablayout />
    </Container>
  ) : (
    <Navigate to='/' />
  );
}
