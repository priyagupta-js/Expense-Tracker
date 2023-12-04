import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function CustomerReview() {

  const CustomStyle ={

  }
  return (
    <Container className="Customer-Container">
      <Row xs={1} lg={3}>
        <Col>
          <h4>We love our Customers and they love us too!!</h4>
        </Col>

        <Col>
          <Row>
          {/* 1st card */}
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>300+</Card.Text>
                  <Card.Title>Tasks</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              {/* 2nd card */}
              <Card>
                <Card.Body>
                  <Card.Text>80+</Card.Text>
                  <Card.Title>Projects</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Card>
              <Card.Body>
                <Card.Text>120+</Card.Text>
                <Card.Title>Members</Card.Title>
              </Card.Body>
            </Card>
            
            
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default CustomerReview;
