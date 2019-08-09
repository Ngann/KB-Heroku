import React, { Component, Fragment } from 'react'
import { FormControl, Button, InputGroup, Table} from 'react-bootstrap'


const containerStyle = {
  marginTop: '10%',
};


class searchInvoicesTwo extends Component {
  render() {
    return (
      <div className="container" style={containerStyle}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Payable"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-primary" >Search</Button>
          </InputGroup.Append>
        </InputGroup>
        <Table striped hover size="sm" >
          <thead >
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Customer Name</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
            <Fragment>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Fragment>
        </Table>
      </div>
    )
  }
}

export default searchInvoicesTwo;
