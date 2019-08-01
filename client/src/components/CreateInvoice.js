import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form , Button} from 'react-bootstrap'

const CREATEINVOICE_MUTATION = gql`
  mutation CreateInvoiceMutation($customer: String!, $date: String!, $account: String!, $amount: Float!) {
    createInvoice(customer: $customer, date: $date, account: $account, amount: $amount) {
      id
      customer
      date
      account
      amount
    }
  }
`

const containerStyle = {
  marginTop: '10%',
  padding:'3%',
  backgroundColor: '#FDFFFC',
  border: '1px solid lightgrey'
};

class CreateInvoice extends Component {
  state = {
    customer: '',
    date: '',
    account: '',
    amount: '',
  }

  render() {
    const { customer, date, account, amount } = this.state
    return (
      <div className= "container" style={containerStyle}>
        <Form.Group controlId="formBasicInvoice">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            className="mb2"
            value={customer}
            onChange={e => this.setState({ customer: e.target.value })}
            type="text"
            placeholder="A customer"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            className="mb2"
            value={date}
            onChange={e => this.setState({ date: e.target.value })}
            type="text"
            placeholder="date"
          />
        </Form.Group>
        <Form.Group controlId="formBasicAccount">
          <Form.Label>Account</Form.Label>
          <Form.Control
            className="mb2"
            value={account}
            onChange={e => this.setState({ account: e.target.value })}
            type="text"
            placeholder="account"
          />
        </Form.Group>
        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            className="mb2"
            value={amount}
            onChange={e => this.setState({ amount: parseFloat(e.target.value) })}
            type="number"
            placeholder="amount"
          />
        </Form.Group>
        <Mutation
        mutation={CREATEINVOICE_MUTATION}
        variables={{ customer, date, account, amount }}
        >
          {createInvoiceMutation => <Button variant="secondary" onClick={createInvoiceMutation}>Add</Button>}
        </Mutation>
        <Button variant="danger" onClick={this.props.history.goBack}>
          Cancel
        </Button >
      </div>
    )
  }
}

export default CreateInvoice
