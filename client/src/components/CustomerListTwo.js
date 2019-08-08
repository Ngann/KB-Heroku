import React, { Component, Fragment } from "react";
import { ButtonGroup, Table, Button, Modal, Form, Col } from "react-bootstrap";

const containerStyle = {
  marginTop: "10%",
  backgroundColor: "#FDFFFC"
};

let listOfCustomers = [
  {
    name: "Customer One",
    contact: "Contact One",
    address: "Address One",
    city: "City One",
    state: "State One"
  },
  {
    name: "Customer Two",
    contact: "Contact Two",
    address: "Address Two",
    city: "City Two",
    state: "State Two"
  },
  {
    name: "Customer Three",
    contact: "Contact Three",
    address: "Address Three",
    city: "City Three",
    state: "State Three"
  },
  {
    name: "Customer Four",
    contact: "Contact Four",
    address: "Address Four",
    city: "City Four",
    state: "State Four"
  }
];
class CustomerListTwo extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false});
    }
        
    handleShow() {
    this.setState({ show: true});
    }

  render() {
    return (
      <div className="container" style={containerStyle}>
        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Contact</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Action</th>
            </tr>
          </thead>
          <Fragment>
            <tbody>
              {listOfCustomers.map((customer,i) => (
                <tr key={i}>
                  <td>{customer.name}</td>
                  <td>{customer.contact}</td>
                  <td>{customer.address}</td>
                  <td>{customer.city}</td>
                  <td>{customer.state}</td>
                  <td>
                    <ButtonGroup size="sm">
                      <Button variant="outline-secondary" onClick={this.handleShow}> Edit</Button>
                      <Button variant="outline-secondary"> Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Fragment>
        </Table>

        <Modal
         show={this.state.show}
         onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header >
            <Modal.Title>Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Row>
              <Col>
                <Form.Label>Customer Name</Form.Label>
                <Form.Control className="mb2" type="text" />
              </Col>
              <Col>
                <Form.Label>Phone</Form.Label>
                <Form.Control className="mb2" type="text" />
              </Col>
            </Form.Row>

            <Form.Group controlId="formBasicContact">
              <Form.Label>Address</Form.Label>
              <Form.Control className="mb2" type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicContact">
              <Form.Label>Address 2</Form.Label>
              <Form.Control className="mb2" type="text" />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicContact">
                  <Form.Label>City</Form.Label>
                  <Form.Control className="mb2" type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicContact">
                  <Form.Label>State</Form.Label>
                  <Form.Control className="mb2" type="text" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="formBasicContact">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control className="mb2" type="text" />
                </Form.Group>
              </Col>
            </Form.Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button>Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CustomerListTwo;
