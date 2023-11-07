import "./App.css";
import NavBar from "./components/Layout/NavBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SideMenu from "./components/Layout/SideMenu";
import { Col, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
function App() {
  return (
    <div className="App">
      <Row className="m-0 p-0">
        <Col md="3" sm="3" xs="5">
          <SideMenu />
        </Col>
        <Col
          className="main-color p-0"
          style={{ height: "1000px" }}
          md="9"
          sm="9"
          xs="7"
        >
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
