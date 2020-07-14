import React, { Component } from 'react';
import Jumbotronlanding from '../layouts/Jumbotronlanding.js';
import { Container, Card, form, Button } from 'react-bootstrap';

import './LandingPage.css';
import { Link } from 'react-router-dom';

class L2LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotronlanding />
          <div className="row mt-5 justify-content-center">
            <div className="col-lg-4 mb-4 grid-margin">
              <div className="card h-100">
                <h4 className="card-header text-center">Training & Resources</h4>
                <div className="card-body">
                  <p className="card-text">
                    Wide range of self-guided group and individual courses
                    covering mental health and lifestyle topics.
                </p>
                  <p>
                    Library of useful articles and resources, plus helpful tests
                    and features to track progress.
                </p>
                </div>
                <div className="card-body">
                  <small className="text-muted">
                    Training and Support Materials & Helpful links, Calender,
                    Helpful videos
                </small>
                </div>
                <div className="card-footer align-self-center mx-auto">
                  <Button variant="btn btn-primary">
                    <Link className="nav-link" to="/Resources">Learn More</Link>
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default L2LandingPage; 