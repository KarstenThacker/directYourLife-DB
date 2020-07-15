import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Jumbotronmentor from "../layouts/Jumbotronmentor.js";
import styled from 'styled-components';
import img36 from "../assets/img36.jpg";
import img37 from "../assets/img37.jpg";
import { Link } from 'react-router-dom';


const Button = styled.button`
background-color: #FF8C00;
color: black;
padding: 5px 15px;
border-radius: 5px;
box-shadow: 0px 2px 2px lightblue;
cursor: pointer;
transition: ease background-color 250ms;
&:hover {
    background-color: #cc7000;
}
margin: 30px;
`


class About extends Component {
  render() {
    return (
      <div className="aboutdiv">
        <Container fluid className="about">
          <Jumbotronmentor />

          <Row>
            <Col>
              <h2>Who can become a Mentor?</h2>
              <p style={{ fontFamily: "helvetica" }}>
                Potential mentors should meet most or all of the following
                criteria:
                <ul>
                  <li>Pass the program screening test</li>
                  <li>Willing to commit for at least one year</li>
                  <li>Similar lived experience to the mentees</li>
                  <li>Connections to the community (if possible)</li>
                </ul>
              </p>
            </Col>

            <Col>
              <img
                src={img36}
                alt="../assets/img36.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Why become a Mentor?</h2>
              <p style={{ fontFamily: "helvetica" }}>
                <ul>
                  <li>Shape leaders of tomorrow</li>
                  <li>Change someone's world</li>
                  <li>Become a better leader</li>
                  <li>
                    Develop skills such as listening, questioning, facilitating,
                    empathizing and rapport building
                  </li>
                </ul>
              </p>
            </Col>

            <Col>
              <img
                src={img37}
                alt="../assets/img37.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
              <Col>
              <div className="card-footer align-self-center mx-auto">
                  <Button variant="btn btn-primary">
                    <Link className="nav-link" to="/Login1">Become a Mentor</Link>
                </Button>
                </div>
            </Col>
          </Row>

          <Row></Row>
        </Container>
        <br></br>
      </div>
    );
  }
}

export default About;
