import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import NewsImage from "../Asset/blog_image.jpeg";

function Blog() {
  return (
    <Container style={{margin:"20px"}}>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top"  src={NewsImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link>Go somewhere</Card.Link>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top"  src={NewsImage}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link>Read More</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={NewsImage} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link>Go somewhere</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Blog;
