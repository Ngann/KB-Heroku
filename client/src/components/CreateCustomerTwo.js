import React, { Component } from "react";
import { Form, Button, Col, Row, ButtonGroup } from "react-bootstrap";

let listOfStates = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];

const containerStyle = {
  marginTop: "10%",
  padding: "3%",
  backgroundColor: "#FDFFFC",
  border: "1px solid lightgrey"
};

class CreateCustomerTwo extends Component {
  render() {
    return (
      <div className="container" style={containerStyle}>
        <Form.Row>
          <Col>
            <Form.Label> Customer Name </Form.Label>
            <Form.Control className="mb2" type="text" />
          </Col>
          <Col>
            <Form.Label> Phone </Form.Label>
            <Form.Control className="mb2" type="text" />
          </Col>
        </Form.Row>
        <Form.Group controlId="formBasicContact">
          <Form.Label> Address </Form.Label>
          <Form.Control
            className="mb2"
            type="text"
            placeholder="1234 Main St"
          />
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label> Address 2 </Form.Label>
          <Form.Control
            className="mb2"
            type="text"
            placeholder="Apartment, studio, or floor"
          />
        </Form.Group>
        <Form.Row>
          <Col>
            <Form.Group controlId="formBasicContact">
              <Form.Label> City </Form.Label>
              <Form.Control className="mb2" type="text" placeholder="" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              {/* <Form.Control as="select">
                  {listOfStates.map((choice, i) => 
                    <option key={i}>{choice}</option>
                )}                   
              </Form.Control> */}
                <Form.Control type="text" placeholder=""/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicContact">
              <Form.Label> Zip </Form.Label>
              <Form.Control className="mb2" type="text" placeholder="" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Row>
          <ButtonGroup>
            <Button variant="secondary"> Submit </Button>
            <Button variant="danger"> Cancel </Button>
          </ButtonGroup>
        </Row>
      </div>
    );
  }
}

export default CreateCustomerTwo;
