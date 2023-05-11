import { RiDeleteBin2Line } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import "./ProductCard.css";

export default function SellerProductTable({ orderProps }) {
  const { _id, name, description, quantity, price, categories } = orderProps;

  const history = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalCategory, setModalCategory] = useState([]);

  const [modalName, setModalName] = useState(name);
  const [modalDescription, setModalDescription] = useState(description);
  const [modalQuantity, setModalQuantity] = useState(quantity);
  const [modalPrice, setModalPrice] = useState(price);
  const [innerMondalCategory, setInnerModalCategory] = useState(categories);

  fetch("http://localhost:4000/products/getCategories")
    .then((result) => result.json())
    .then((data) => setModalCategory(data));

  const category = modalCategory.map((data) => {
    return (
      <option id={_id} value={data}>
        {data}
      </option>
    );
  });

  function deleteProduct(id) {
    // e.preventDefault();
    fetch(`http://localhost:4000/seller/delete/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        isActive: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          // window.location.href('/admin');
          // alert('Deleted');
          window.location.reload("/admin");
          // history('/');
        } else {
          alert("Something went wrong. Try again later.");
        }
      });
  }

  function updateProduct(e) {
    e.preventDefault();

    fetch(`http://localhost:4000/seller/edit/${orderProps._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name: modalName,
        description: modalDescription,
        price: modalPrice,
        quantity: modalQuantity,
        categories: innerMondalCategory,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.name) {
          alert("Update");
          window.location.reload();
        } else {
          alert("Failed");
        }
      });
  }

  return (
    <>
      <tr>
        <td>{_id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{categories}</td>
        <td>
          <Button variant="success" onClick={handleShow}>
            <AiTwotoneEdit size={20} />
          </Button>
          <Button variant="danger" onClick={() => deleteProduct(_id)}>
            <RiDeleteBin2Line size={20} />
          </Button>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose} className="card_product">
        <Row xs={12} md={12}>
          <Form className="formmodal__xx p-5">
            <h2>Update your product</h2>
            {/*onSubmit={(e) => updateProduct(e)}>*/}

            <Form.Group as={Col} className="mb-3" controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter updated name"
                required
                value={modalName}
                onChange={(e) => setModalName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                required
                value={modalDescription}
                onChange={(e) => setModalDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="quantity"
                required
                value={modalQuantity}
                onChange={(e) => setModalQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                required
                value={modalPrice}
                onChange={(e) => setModalPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridState">
              <Form.Label>Category</Form.Label>
              <Form.Select
                className="dropdownMenu"
                // value={categorySelected}
                onChange={(e) => setInnerModalCategory(e.target.value)}
                scrollable={true}
              >
                {/* {category}*/}
                {category}
              </Form.Select>
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              // onClick={handleClose}
              onClick={(e) => updateProduct(e)}
              className="mx-3"
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Row>
      </Modal>
    </>
  );
}
