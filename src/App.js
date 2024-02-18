import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./components/assets/style.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col className="col-12 col-md-9 offset-md-3">
            <Navbar></Navbar>
            <MainSection genre="hip hop"></MainSection>
            <MainSection genre="italiane"></MainSection>
            <MainSection genre="house"></MainSection>
          </Col>
        </Row>
      </Container>
      <Player />
    </BrowserRouter>
  );
}

export default App;
