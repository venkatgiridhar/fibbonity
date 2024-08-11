import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../images/icon.png";

import "./Footer.css";
function Footer() {
  return (
    <div>
      <Row>
        <Col className="md-12">
          <Image className="fib-footer" src={icon} />
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
