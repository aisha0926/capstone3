import { Tab, Row, Col, Nav } from "react-bootstrap";
import SellerProducts from "../pages/SellerProducts";
import AdminComponent from "./AdminComponent";
import SellerDataTable from "./SellerDataTable";

export default function Tablayout() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Add Product </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">View Seller Data</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">View Products</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <AdminComponent />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <SellerDataTable />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <SellerProducts />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
