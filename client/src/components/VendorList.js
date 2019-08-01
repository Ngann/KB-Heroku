import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ButtonGroup, Table, Button, Modal, Form, Col } from "react-bootstrap";

const VENDORS_QUERY = gql`
  {
    vendors {
      id
      name
      contact
      address
      addressTwo
      city
      state
      country
      createdAt
    }
  }
`;
const DELETEVENDOR_MUTATION = gql`
  mutation DeleteVendorMutation($id: ID!) {
    deleteVendor(id: $id) {
      id
    }
  }
`;

const UPDATEVENDOR_MUTATION = gql`
  mutation UpdateVendorMutation(
    $id: ID!
    $name: String!
    $contact: String!
    $address: String!
    $addressTwo: String!
    $city: String!
    $state: String!
    $country: String!
  ) {
    updateVendor(
      id: $id
      name: $name
      contact: $contact
      address: $address
      addressTwo: $addressTwo
      city: $city
      state: $state
      country: $country
    ) {
      name
      contact
      address
      addressTwo
      city
      state
      country
    }
  }
`;

const containerStyle = {
  marginTop: "10%",
  backgroundColor: "#FDFFFC"
};

class VendorList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      currentVendor: {},
    };
  }

  handleClose() {
    this.setState({ show: false, currentVendor: {} });
  }

  handleShow(vendor) {
    this.setState({ show: true, currentVendor: vendor });
  }

  // _updateCacheAfterDelete = (store) => {
  //   const data = store.readQuery({ query: VENDORS_QUERY })
  //   // const vendorDelete = data.vendors.find(vendor => vendor.id === vendorId)
  //   // vendorDelete.vendor =
  //   store.writeQuery({ query: VENDORS_QUERY, data })
  // }
 
  render() {
    const {
      currentVendor:{
        name,
        contact,
        address,
        addressTwo,
        city,
        state,
        country,
      }
    } = this.state;

    const { currentVendor} = this.state
    return (
      <Query query={VENDORS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const vendorsToRender = data.vendors;

          return (
            <div className="container" style={containerStyle}>
              <Table striped hover size="sm">
                <thead>
                  <tr>
                    <th>Vendor Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {vendorsToRender.map(vendor => (
                  <Fragment key={vendor.id}>
                    <tbody>
                      <tr>
                        <td>{vendor.name}</td>
                        <td>{vendor.contact}</td>
                        <td>{vendor.address}</td>
                        <td>{vendor.city}</td>
                        <td>{vendor.state}</td>
                        <td>
                          <ButtonGroup size="sm">
                            <Button
                              variant="outline-secondary"
                              onClick={()=> {
                                this.handleShow(vendor)
                              }}
                            >
                              Edit
                            </Button>
                            <Mutation
                              mutation={DELETEVENDOR_MUTATION}
                              variables={{ id: vendor.id }}
                              onCompleted={() => this.props.history.push("/")}
                            >
                              {deleteVendorMutation => (
                                <Button
                                  variant="outline-secondary"
                                  onClick={deleteVendorMutation}
                                >
                                  Delete
                                </Button>
                              )}
                            </Mutation>
                          </ButtonGroup>
                        </td>
                      </tr>
                    </tbody>
                  </Fragment>
                ))}
              </Table>
              <Modal
                show={this.state.show}
                onHide={this.handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Vendor: {currentVendor.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form.Row>
                    <Col>
                      <Form.Label>Vendor Name</Form.Label>
                      <Form.Control
                        className="mb2"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value })}
                        type="text"
                        placeholder={currentVendor.name}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        className="mb2"
                        value={contact}
                        onChange={e =>
                          this.setState({ contact: e.target.value })
                        }
                        type="text"
                        placeholder={currentVendor.contact}
                      />
                    </Col>
                  </Form.Row>

                  <Form.Group controlId="formBasicContact">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      className="mb2"
                      value={address}
                      onChange={e => this.setState({ address: e.target.value })}
                      type="text"
                      // placeholder={currentVendor.address}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicContact">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                      className="mb2"
                      value={addressTwo}
                      onChange={e =>
                        this.setState({ addressTwo: e.target.value })
                      }
                      type="text"
                      placeholder={currentVendor.addressTwo}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Group controlId="formBasicContact">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          className="mb2"
                          value={city}
                          onChange={e =>
                            this.setState({ city: e.target.value })
                          }
                          type="text"
                          placeholder={currentVendor.city}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formBasicContact">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          className="mb2"
                          value={state}
                          onChange={e =>
                            this.setState({ state: e.target.value })
                          }
                          type="text"
                          placeholder={currentVendor.state}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formBasicContact">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                          className="mb2"
                          value={country}
                          onChange={e =>
                            this.setState({ country: e.target.value })
                          }
                          type="text"
                          placeholder={currentVendor.country}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                    Close
                  </Button>
                  <Mutation
                    mutation={UPDATEVENDOR_MUTATION}
                    variables={{
                      ...currentVendor
                    }}
                  >
                    {updateVendorMutation => (
                      <Button onClick={updateVendorMutation}>
                        Save Changes
                      </Button>
                    )}
                  </Mutation>
                </Modal.Footer>
              </Modal>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default VendorList;
