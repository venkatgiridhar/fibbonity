import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../images/icon.png";
import "./Header.css";
function Header() {
  return (
    <div>
      <Row className="fib-container">
        <Col className="md-2">
          <Image className="fib-icon" src={icon} />
        </Col>
        <Col className="md-10">
          <div className="fib-text">
            <span> Fibbonity Program</span>
            <span> Get Started NOW</span>
            <span> Events</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
