import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";

function Login() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const [email, loginEmail] = useState("");
  const [password, loginPassword] = useState("");
  const [isActive, loginActive] = useState(false);

  //checking if email and pass is not empty
  useEffect(() => {
    if (email !== "" && password !== "") {
      loginActive(true);
    } else {
      loginActive(false);
    }
  }, [email, password]);

  //prevents the refresh

  function loginUser(e) {
    e.preventDefault();

    fetch("http://localhost:4000/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // eto yon
        if (typeof data.accessToken !== "undefined") {
          localStorage.setItem("token", data.accessToken);
          retrieveUserDetails(data.accessToken);

          Swal.fire({
            title: "Login Successful",
            icon: "success",
            text: "Successfully login!",
          });
        } else {
          Swal.fire({
            title: "Authentication Failed",
            icon: "error",
            text: "Check your credentials",
          });
        }
      });

    loginEmail("");
    loginPassword("");
  }

  const retrieveUserDetails = (token) => {
    fetch("http://localhost:4000/customer/getSingleUser", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((data) => {
          if (typeof data._id !== "undefined") {
            setUser({
              id: data._id,
              isAdmin: data.isAdmin,
              isActive: data.isActive,
            });
          }
        });
      });
  };
  console.log(user);
  console.log(setUser);
  return user.id !== null ? (
    user.isAdmin === true ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <div className="box-form-main">
      <div className="box-form">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img className="tinda_logo" src="imgs/TINDA.png" alt="logo" />
        </div>
        <Form onSubmit={(e) => loginUser(e)} className="login__form">
          <h3 className="mt-2 mb-2">Sign-in</h3>
          <Form.Group className="text-field mb-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => loginEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="text-field mb-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => loginPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-3 mb-3" controlId="formBasicPassword">
            {/*disabling button condition*/}
            {isActive ? (
              <Button
                className="login__button text-white"
                variant="success"
                type="submit"
              >
                Submit
              </Button>
            ) : (
              <Button
                className="login__button text-white"
                variant="danger"
                type="submit"
                id="loginButton"
                disabled
              >
                Login
              </Button>
            )}
          </Form.Group>
          <Form.Text className="text-white">
            New to User? Click <a href="/register">Here..</a>
          </Form.Text>
        </Form>
      </div>
    </div>
  );
}

export default Login;
