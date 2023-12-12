import React from 'react';
import {Container , Row , Col} from "react-bootstrap";
function Footer (){
 
    return (
      <Container style={{backgroundColor:"#fffaf0" , margin:"0px"}}>
        <Row  style={{marginTop:"20px", marginBottom:"20px" ,padding:"20px"}}>
          <Col>
            <ul>
            <li>Features</li>
              <li>Expense Management</li>
              <li>Spend Management</li>
              <li>Expense Reports</li>
            </ul>
          </Col>
          <Col>
          <ul>
              <li>Resources</li>
              <li>Community</li>
              <li>Expense Help</li>
              <li>Privacy</li>
            </ul>
          </Col>
          <Col>
          <ul>
              <li>Learn More</li>
              <li>Blog</li>
              <li>News</li>
              <li>Expense</li>
            </ul>
          </Col>
          <Col>
          <ul>
              <li>Get Started</li>
              <li>Log in</li>
              <li>Create an Account</li>
            </ul>
          </Col>
        </Row>
        </Container>
    )
  }
export default Footer;