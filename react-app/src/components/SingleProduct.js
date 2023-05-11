import {Button, Modal, Row, Col} from 'react-bootstrap'; 
import {useState} from 'react';


export default function SingleProductView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

   <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Modal heading</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

		<Row>
            <Col xs={12} md={8}>
              <img src="https://place-puppy.com/300x300" thumbnail/>
            </Col>
            <Col xs={6} md={4}>
              <img src="https://place-puppy.com/300x300" thumbnail/>
            </Col>
          </Row>


       	 <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}