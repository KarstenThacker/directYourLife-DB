import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <h3 className="grey-text text-darken-3">
              Mentor Expression of Interest Form
            </h3>
            <h6>
              Thank you for your interest in working with us. Please fill out
              the questions below and click "Submit" once you are finished
            </h6>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="email" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="password" placeholder="Last Name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Province</Form.Label>
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option value="AB">Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="MB">Manitoba</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="ON">Ontario</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="QC">Quebec</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="NT">Northwest Territories</option>
                    <option value="NU">Nunavut</option>
                    <option value="YT">Yukon</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>
            </Form>
            <div className="input-field"></div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                onChange={this.handleChange}
              />
              <label>City</label>
              <Form.Control type="text" placeholder="City" required />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3">
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Drivers License </Form.File.Label>
                <Form.File.Input />
              </Form.File>
            </div>
            <Form.Group id="formGridCheckbox">
              <Form.Check
                type="checkbox"
                label="I understand my information will be reviewed"
              />
            </Form.Group>
            <div className="input-field">
              <button className="btn pink lightne-1 z-depth-0">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
