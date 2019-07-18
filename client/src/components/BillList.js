import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import{ Modal, Button, Table, ButtonGroup, Form} from 'react-bootstrap'

const BILLS_QUERY = gql`
{
  bills {
    id
    vendor
    date
    amount
    account
    vendorId {
      name
    }
    accountId {
      name
    }
  }
}
`
const DELETEBILL_MUTATION = gql`
mutation DeleteBillMutation($id: ID!) {
  deleteBill(id: $id) {
    id
  }
}
`

const UPDATEBILL_MUTATION = gql`
mutation UpdateBillMutation($id: ID!, $vendor: String!, $date:String!, $account:String!, $amount: String!) {
  updateBill(id: $id, vendor: $vendor, date:$date, account:$account, amount: $amount) {
    vendor
    date
    account
    amount
  }
}
`
const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};

class BillList extends Component {constructor(props, context) {
  super(props, context);

  this.handleShow = this.handleShow.bind(this);
  this.handleClose = this.handleClose.bind(this);

  this.state = {
    show: false,
  };
}

handleClose() {
  this.setState({ show: false });
}

handleShow() {
  this.setState({ show: true });
}

state = {
  vendor: '',
  date: '',
  amount: '',
  account: '',
}

render() {

  const { vendor, date, amount, account } = this.state
  return (

    <Query query={BILLS_QUERY}>
    {({ loading, error, data }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      const billsToRender = data.bills

      return (
        <div className="container" style={containerStyle}>
          <Table striped hover size="sm" >
          <thead >
            <tr>
              <th>Date</th>
              <th>Vendor Name</th>
              <th>Account</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          {billsToRender.map(bill => (
            <Fragment key={bill.id} >
              <tbody>
                <tr>
                  <td>{bill.date}</td>
                  <td>{bill.vendorId.name}</td>
                  <td>{bill.accountId.name}</td>
                  <td>{bill.amount}</td>
                  <td>
                   <ButtonGroup size="sm">
                   <Button variant="outline-secondary" onClick={this.handleShow}>
                  Edit
                  </Button><Mutation
                  mutation={DELETEBILL_MUTATION}
                  variables={{ id: bill.id }}
                  >
                  {deleteBillMutation => <Button variant="outline-secondary" onClick={deleteBillMutation}>Delete</Button>}
                  </Mutation>

                   </ButtonGroup>
                  </td>
                </tr>
              </tbody>
              <Modal show={this.state.show} onHide={this.handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Bill: {bill.vendor}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Group controlId="formBasicCustomer">
                    <Form.Label>Vendor Name</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={vendor}
                        onChange={e => this.setState({ vendor: e.target.value })}
                        type="text"
                        placeholder="A vendor"
                    />
                    </Form.Group>
                    <Form.Group controlId="formBasicContact">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={account}
                        onChange={e => this.setState({ amount: e.target.value })}
                        type="text"
                        placeholder="amount"
                    />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                  Close
                  </Button>
                  <Mutation
                  mutation={UPDATEBILL_MUTATION}
                  variables={{ id: bill.id, vendor, date, account, amount }}>
                  {updateBillMutation => <Button onClick={updateBillMutation}>Save Changes</Button>}
                  </Mutation>
                </Modal.Footer>
              </Modal>
            </Fragment>
          ))}
          </Table>
        </div>
      )
    }}
    </Query>
  )
}
}

export default BillList
