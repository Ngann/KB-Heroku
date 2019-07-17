import React, { Component, Fragment } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Modal, Button, Table, ButtonGroup } from 'react-bootstrap'
const ACCOUNTS_QUERY = gql`
{
  accounts {
    id
    name
    number
    accountType
    accountCategory
  }
}
`
const DELETEACCOUNT_MUTATION = gql`
mutation deleteAccountMutation($id: ID!) {
  deleteAccount(id: $id) {
    id
  }
}
`

const UPDATEACCOUNT_MUTATION = gql`
mutation UpdateAccountMutation($id: ID!, $name: String!, $number: String!) {
  updateAccount(id: $id, name: $name, number: $number) {
    name
    number
  }
}
`

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC',
  color: 'rgb(61, 85, 107)'
};

class AccountList extends Component {constructor(props, context) {
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
  name: '',
  number: '',
}

render() {

  const { name, number } = this.state
  return (

    <Query query={ACCOUNTS_QUERY}>
    {({ loading, error, data }) => {
      if (loading)return <div>Fetching</div>
      if (error) return <div>Error</div>

      const accountsToRender = data.accounts

      console.log(accountsToRender)

      return (
        <div className="container" style={containerStyle}>
          <Table striped hover size="sm" >
          <thead >
            <tr >
              <th>Account Name</th>
              <th>Number</th>
              <th>Account Type</th>
              <th>Account Category</th>
              <th >Action</th>
            </tr>
          </thead>
          {accountsToRender.map(account => (
            <Fragment key={account.id} >
              <tbody>
                <tr>
                  <td>{account.name}</td>
                  <td>{account.number}</td>
                  <td>{account.accountType}</td>
                  <td>{account.accountCategory}</td>
                  <td>
                < ButtonGroup size="sm">
                    <Button variant="outline-secondary" onClick={this.handleShow} size="small" >Edit</Button>
                    <Mutation
                    mutation={DELETEACCOUNT_MUTATION}
                    variables={{ id: account.id }}
                    >
                    {deleteAccountMutation => <Button variant="outline-secondary" onClick={deleteAccountMutation}>Delete</Button>}
                    </Mutation>
                 </ButtonGroup>
                  </td>
                </tr>
              </tbody>
              <Modal show={this.state.show} onHide={this.handleClose} >
                <Modal.Header closeButton>
                <Modal.Title>account: {account.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="flex flex-column mt3">
                    <input
                    className="mb2"
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                    type="text"
                    placeholder="A name"
                    />
                    <input
                    className="mb2"
                    value={number}
                    onChange={e => this.setState({ number: e.target.value })}
                    type="text"
                    placeholder="number"
                    />
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                  Close
                  </Button>
                  <Mutation
                  mutation={UPDATEACCOUNT_MUTATION}
                  variables={{ id: account.id, name, number }}>
                  {UpdateAccountMutation => <Button onClick={UpdateAccountMutation}>Save Changes</Button>}
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

export default AccountList
