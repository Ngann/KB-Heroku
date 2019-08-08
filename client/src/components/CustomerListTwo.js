import React, {Component, Fragment} from 'react';
import { ButtonGroup, Table, Button, Modal, Form, Col } from "react-bootstrap";

const containerStyle = {
    marginTop: "10%",
    backgroundColor: "#FDFFFC"
  };

let listOfCustomers = [
    {"name": "Customer One", "contact": "Contact One", "address": "AddressOne", "city": "cityOne", "state": "stateOne"},
    {"name": "Customer Two", "contact": "Contact Two", "address": "AddressTwo", "city": "cityTwo", "state": "stateTwo"},
    {"name": "Customer Three", "contact": "Contact Three", "address": "AddressThree", "city": "cityThree", "state": "stateThree"},
    {"name": "Customer Four", "contact": "Contact Four", "address": "AddressFour", "city": "CityFour", "state": "stateFour"},
]
class CustomerListTwo extends Component {
    render(){
        return(
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
                  <Fragment >
                    <tbody>
                     
                    { listOfCustomers.map((customer) =>
                     <tr>
                        <td>{customer.name}</td>
                        <td>{customer.contact}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.state}</td>
                        <td>
                        <ButtonGroup size="sm">
                            <Button variant="outline-secondary"> Edit</Button>
                            <Button variant="outline-secondary"> Delete</Button>
                        </ButtonGroup>
                        </td>
                        </tr>
                        )}
                    </tbody>
                  </Fragment>
              </Table>
            </div>
        )
    }
}

export default CustomerListTwo