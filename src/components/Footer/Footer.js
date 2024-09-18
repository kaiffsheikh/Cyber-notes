import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; Copyright 2024 | All right reserved by Digital Savers</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;