import React, { Component } from 'react';
import JumbotronTraining from '../../components/layouts/JumbotronTraining.js';
import { Container, Col, Row } from 'react-bootstrap';



class Resources extends Component {
  render() {
    return (
      <div>

        <Container fluid className="home" >
          <JumbotronTraining />

        </Container>
        <br />


        <br />
      </div>
    );
  }
}

export default Resources;