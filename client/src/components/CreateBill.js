import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

const CREATEBILL_MUTATION = gql`
  mutation CreateBilltMutation($vendor: String!, $date: String!, $account: String!, $amount: Int!) {
    createBill(vendor: $vendor, date: $date, account: $account, amount: $amount) {
      id
      vendor
      date
      account
      amount
    }
  }
`

const VENDORS_QUERY = gql`
{
  vendors {
    id
    name
  }
}
`
const ACCOUNTS_QUERY = gql`
{
  accounts {
    id
    name
    number
  }
}
`

const containerStyle = {
  marginTop: '10%',
  padding: '3%',
  backgroundColor: '#FDFFFC',
  border: '1px solid lightgrey'
};

class CreateBill extends Component {
  state = {
    vendor: '',
    date: '',
    account: '',
    amount: '',
  }

  render() {
    const { vendor, date, account, amount } = this.state
    return (
      <div className="container" style={containerStyle}>

        <Query query={VENDORS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading vendors</div>
            if (error) return <div>Error</div>

            const vendorList = data.vendors
            return (
              <Form.Group controlId="formGridState">
                <Form.Label>Vendor</Form.Label>
                <Form.Control as="select"
                  value={this.state.value}
                  onChange={e => this.setState({ vendor: e.target.value })}
                >
                  <option>Select Vendor</option>
                  {vendorList.map(vendor => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )
          }}
        </Query>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            className="mb2"
            value={date}
            onChange={e => this.setState({ date: e.target.value })}
            type="date"
          />
        </Form.Group>
        <Query query={ACCOUNTS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading accounts</div>
            if (error) return <div>Error</div>

            const accountList = data.accounts
            return (
              <Form.Group controlId="formGridState">
                <Form.Label>Account</Form.Label>
                <Form.Control as="select"
                  value={this.state.value}
                  onChange={e => this.setState({ account: e.target.value })}
                  placeholder="Select Account"
                >
                  <option>Select Account</option>
                  {accountList.map(account => (
                    <option key={account.id} value={account.id}>
                      {account.number}-{account.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )
          }}
        </Query>
        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            className="mb2"
            value={amount}
            onChange={e => this.setState({ amount: parseInt(e.target.value) })}
            type="float"
            placeholder="Amount"
          />
        </Form.Group>
        <ButtonGroup>
          <Mutation
            mutation={CREATEBILL_MUTATION}
            variables={{ vendor, date, account, amount }}
          >
            {createBillMutation => <Button variant="secondary" onClick={createBillMutation}>Post</Button>}
          </Mutation>
          <Button variant="danger" onClick={this.props.history.goBack}>
            Cancel
         </Button >
        </ButtonGroup>

      </div>
    )
  }
}

export default CreateBill
