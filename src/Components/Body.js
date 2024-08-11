import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import body from "../images/body.png";
import info from "../images/info.png";
import "./Body.css";
function Body() {
  return (
    <div>
      <Row>
        <Col className="md-12">
          <Image src={body} />
          <div className="fib-body-summary">
            <div>✨ Self-Care ✨ </div>
            <div>✨ Healthy Lifestyle ✨ </div>
            <div>on Your Terms</div>

            <div className="fib-body-click">Click Here </div>

            <Image src={info} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Body;
