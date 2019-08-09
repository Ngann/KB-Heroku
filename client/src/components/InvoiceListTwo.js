import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Modal, Button, Table, ButtonGroup, Form } from "react-bootstrap";

const containerStyle = {
  marginTop: "10%",
  backgroundColor: "#FDFFFC"
};

class InvoiceListTwo extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="container" style={containerStyle}>
        <Table striped hover size="sm">
          <thead>
            <tr>
              <th>Date</th>
              <th>Vendor Name</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <Fragment>
            <tbody>
              <tr>
                <td />
                <td />
                <td />
                <td />
                <td>
                  <ButtonGroup size="sm">
                    <Button
                      variant="outline-secondary"
                      onClick={this.handleShow}
                    >
                      Edit
                    </Button>
                    <Button variant="outline-secondary">Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
            <Modal
              show={this.state.show}
              onHide={this.handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Invoice:</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="formBasicCustomer">
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control
                    className="mb2"
                    type="text"
                    placeholder="A vendor"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicContact">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    className="mb2"
                    type="text"
                    placeholder="amount"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button>Save Changes</Button>
              </Modal.Footer>
            </Modal>
          </Fragment>
        </Table>
      </div>
    );
  }
}

export default InvoiceListTwo;
