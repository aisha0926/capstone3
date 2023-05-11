import React from "react";
import { Button, Form } from "react-bootstrap";
import "./RegisterUser.css";
import { useState, useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import Swal from "sweetalert2";

export default function RegisterUser() {
  const history = useNavigate();
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      mobileNumber !== "" &&
      password !== ""
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [firstName, lastName, email, mobileNumber, password]);

  function registration(e) {
    e.preventDefault();
    console.log(e);

    fetch("http://localhost:4000/customer/checkEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          Swal.fire({
            title: "Duplicate email found",
            icon: "info",
            text: "Please provide another email",
          });
        } else {
          fetch("http://localhost:4000/customer/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              mobileNumber: mobileNumber,
              password: password,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);

              // if(password.length < 6){

              //    Swal.fire({
              //     title: 'Registration failed',
              //     icon: 'error',
              //     text: 'Password must be atleast 6 characters'
              //   })

              // }else

              if (data.email) {
                Swal.fire({
                  title: "Registration successful",
                  icon: "success",
                  text: "Thank you for registering",
                });

                history("/login");
              } else {
                Swal.fire({
                  title: "Registration failed",
                  icon: "error",
                  text: "Something went wrong",
                });
              }
            });
        }
      });

    setFirstName("");
    setLastName("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
  }

  return user.id !== null ? (
    <Navigate to="/login" />
  ) : (
    <div className="outer_bg">
      <div className="inner_bgcover">
        <div className="Form__logo">
          <div className="logo_tinda">
            <img
              className="logo__tinda"
              src="imgs/TINDA.png"
              style={{ width: "20rem" }}
              alt="logo"
            />
            <p className="span_text text-white">
              Already have an account? Click <a href="/login">Here..</a>
            </p>
            <p className=" span_text text-white">
              Are you registering as a Seller? Click{" "}
              <a href="/register_seller"> Here..</a>
            </p>
          </div>

          <div className="form__reg">
            <Form
              onSubmit={(e) => registration(e)}
              className="registration__form"
            >
              <h1 className=".signup_h1">Customer Sign up</h1>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mobileNumber">
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter mobile number"
                  required
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className=" form_text text-white">
                  Password must be at least 6 characters.
                </Form.Text>
              </Form.Group>

              {isActive ? (
                <Button
                  variant="success"
                  type="submit"
                  className="btn_submitreg text-white"
                  id="submitBtn"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  variant="warning"
                  type="submit"
                  className="btn_submitreg text-white"
                  id="submitBtn"
                  disabled
                >
                  Submit
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
