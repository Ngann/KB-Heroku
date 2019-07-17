import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Button, ButtonGroup } from 'react-bootstrap'

const CREATEACCCOUNT_MUTATION = gql`
  mutation CreateAccountMutation($name: String!, $number: String!, $accountType: String!, $accountCategory: String!) {
    createAccount(name: $name, number: $number, accountType: $accountType, accountCategory: $accountCategory) {
      id
      name
      number
      accountType
      accountCategory
    }
  }
`

const containerStyle = {
    marginTop: '10%',
    padding: '3%',
    backgroundColor: '#FDFFFC',
    border: '1px solid lightgrey'
};

class CreateAccount extends Component {
    state = {
        name: '',
        number: '',
        accountType: '',
        accountCategory: '',
    }

    render() {
        const { name, number, accountType, accountCategory } = this.state
        return (
            <div className="container" style={containerStyle}>
                <Form.Group controlId="formBasicAccount">
                    <Form.Label>Account Name</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={name}
                        onChange={e => this.setState({ name: e.target.value })}
                        type="text"
                        placeholder="name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicnumber">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={number}
                        onChange={e => this.setState({ number: e.target.value })}
                        type="text"
                        placeholder="number"
                    />
                </Form.Group>
                
                <Form.Group controlId="formBasicnumber">
                    <Form.Label>Account Type</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={accountType}
                        onChange={e => this.setState({ accountType: e.target.value })}
                        type="text"
                        placeholder="account type"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicnumber">
                    <Form.Label>Account Category</Form.Label>
                    <Form.Control
                        className="mb2"
                        value={accountCategory}
                        onChange={e => this.setState({ accountCategory: e.target.value })}
                        type="text"
                        placeholder="account category"
                    />
                </Form.Group>
                <ButtonGroup>
                    <Mutation
                        mutation={CREATEACCCOUNT_MUTATION}
                        variables={{ name, number, accountType, accountCategory }}
                    >
                        {CreateAccountMutation => <Button variant="secondary" onClick={CreateAccountMutation}>Submit</Button>}
                    </Mutation>
                    <Button variant="danger" onClick={this.props.history.goBack}>
                        Cancel
                    </Button >
                 </ButtonGroup>
            </div>
        )
    }
}

export default CreateAccount