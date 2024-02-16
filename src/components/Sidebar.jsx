// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
// import Container from "react-bootstrap/esm/Container";
// import Row from "react-bootstrap/esm/Row";

const Sidebar = () => {
  return (
    <Col
      md={2}
      lg={2}
      className="bg-black min-vh-100 d-flex flex-column justify-content-between"
      fixed="left"
    >
      <div>
        <p>
          <img
            src="logo.png"
            alt="Logo"
            width={170}
            height={50}
            className="mt-3"
          />
        </p>

        <p className="mt-4">
          <HouseDoorFill color="lightgrey" size={20} />
          <span className="text-light ms-2">Home</span>
        </p>
        <p className="mt-4">
          <BookFill color="lightgrey" size={20} />
          <span className="text-light ms-2">La Mia Libreria</span>
        </p>
        <div className="mt-2 bg-body-tertiary">
          <Form>
            <InputGroup className="rounded-1">
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
              <InputGroup.Text className="bg-dark text-white">
                GO
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </div>
      </div>

      <div className="d-grid gap-2 mb-2">
        <Button variant="light" className="rounded-4">
          Sign Up
        </Button>
        <Button variant="outline-light" className="rounded-4">
          Login
        </Button>
      </div>
    </Col>
  );
};

export default Sidebar;
