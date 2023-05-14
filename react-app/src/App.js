import './App.css';
import RegisterUser from './pages/RegisterUser';
import RegisterSeller from './pages/RegisterSeller';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetProducts from './pages/GetProducts';
import SingleProductView from './pages/SingleProductView';
import { UserProvider } from './UserContext';
import { useState, useEffect } from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
// import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import GetOrders from './pages/GetOrders';
import Food from './pages/Food';
import Garden from './pages/Garden';
import HomeKitchen from './pages/Home&Kitchen';
import Software from './pages/Software';
import SellerProducts from './pages/SellerProducts';

function App() {
  const [user, setUser] = useState({
    id: null,
    isActive: null,
    isAdmin: null,
  });
  const unsetUser = () => {
    localStorage.clear();
  };
  useEffect(() => {
    fetch('https://aqueous-atoll-50380.herokuapp.com/customer/getSingleUser', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // captured the data of whoever is logged in
        console.log(data);
        data.forEach((data) => {
          if (typeof data._id !== 'undefined') {
            setUser({
              id: data._id,
              isAdmin: data.isAdmin,
              isActive: data.isActive,
            });
          } else {
            // set back the initial state of user
            setUser({
              id: null,
              isActive: null,
              isAdmin: null,
            });
          }
        });
        // set the user states values with the user details upon successful login
      });
  }, []);

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin' element={<AdminDashboard />} />
          <Route
            exact
            path='/products/:productId'
            element={<SingleProductView />}
          />
          <Route exact path='/register' element={<RegisterUser />} />
          <Route exact path='/register_seller' element={<RegisterSeller />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/food' element={<Food />} />
          <Route exact path='/garden' element={<Garden />} />
          <Route exact path='/home&kitchen' element={<HomeKitchen />} />
          <Route exact path='/software' element={<Software />} />
          <Route exact path='*' element={<Error />} />
          <Route exact path='/products' element={<GetProducts />} />
          <Route exact path='/myorders' element={<GetOrders />} />
          <Route exact path='/sellerproducts' element={<SellerProducts />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </UserProvider>
  );
}

export default App;
