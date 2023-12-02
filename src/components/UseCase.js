import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function UseCase() {
  return (
    <Container className="useCase-Container">
      <h3>See how Expense can help you manage your everyday expenses.</h3>
      <Row xs={1} lg={3} md={3}>
        <Col>
          <Card >
            <Card.Text>icon</Card.Text>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Text>icon</Card.Text>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Text>icon</Card.Text>
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default UseCase;
