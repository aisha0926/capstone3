import { Row, Col, Section, Container, Button } from 'react-bootstrap';
import './Simple.css';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import Swal from 'sweetalert2';

export default function SingleProductView() {
  // hello
  const { user } = useContext(UserContext);
  const history = useNavigate();

  const { productId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [categories, setCategory] = useState('');
  console.log(user);

  const order = (productId) => {
    console.log({ productId });
    fetch(
      `https://aqueous-atoll-50380.herokuapp.com/customer/order/${productId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          productId: productId,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          Swal.fire({
            title: 'Added to your cart!',
            icon: 'success',
            text: 'Thank you!',
          });
          history('/products');
        } else {
          Swal.fire({
            title: 'Failed to add!',
            icon: 'error',
            text: 'Please try again later',
          });
        }
      });
  };

  useEffect(() => {
    fetch(`https://aqueous-atoll-50380.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
        setDescription(data.description);
        setCategory(data.categories);
      });
  }, [productId]);

  return (
    <div className='container-box'>
      <div className='product__view'>
        <img
          className='img_prod'
          src='https://place-puppy.com/303x300'
          alt='product'
          fluid
        />
        <div className='details_product'>
          <h1>{name}</h1>
          <hr style={{ width: '30rem' }} />
          <span className=''>
            <h6>About this item:</h6>
          </span>
          <p className=''>{description}</p>
          <span>
            Price: <strong className='price_tag_'> ${price}</strong>
          </span>
          <hr />
          <p>Category: {categories}</p>
          <hr />
        </div>
        <div className='check_out__'>
          <div className='m-3'>
            <p className='stocks_remaining'>
              Stocks remaining:<h3 className='quantity_stocks'>{quantity}</h3>
            </p>
            {user.id !== null ? (
              user.isAdmin === true ? (
                <Link
                  className='add_tocartbutton btn btn-warning'
                  to={'/login'}
                >
                  Login as Customer
                </Link>
              ) : (
                <Button
                  className='add_tocartbutton btn btn-warning'
                  onClick={() => order(productId)}
                >
                  Add Cart
                </Button>
              )
            ) : (
              <Link className='add_tocartbutton btn btn-warning' to={'/login'}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
