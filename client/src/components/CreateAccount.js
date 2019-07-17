import React, { Component} from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import { Form, Button, ButtonGroup } from "react-bootstrap";

const CREATEACCCOUNT_MUTATION = gql`
  mutation CreateAccountMutation(
    $name: String!
    $number: String!
    $accountType: enumValues!
    $accountCategory: enumValues!
  ) {
    createAccount(
      name: $name
      number: $number
      accountType: $accountType
      accountCategory: $accountCategory
    ) {
      id
      name
      number
      accountType
      accountCategory
    }
  }
`;

const ACCOUNTCATEGORY_QUERY = gql`
    query accountCategory {
   __type(name:"AccountCategory"){
    name
    enumValues{
      name
    }
  }
}
`

const ACCOUNTTYPE_QUERY = gql`
    query accountType {
   __type(name:"AccountType"){
    name
    enumValues{
      name
    }
  }
}
`

const containerStyle = {
  marginTop: "10%",
  padding: "3%",
  backgroundColor: "#FDFFFC",
  border: "1px solid lightgrey"
};

class CreateAccount extends Component {
  state = {
    name: "",
    number: "",
    accountType: "",
    accountCategory: ""
  };

  render() {
    const { name, number, accountType, accountCategory } = this.state;
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
        <Query query={ACCOUNTTYPE_QUERY}>
          {({ loading, error, data }) => {
              let typeLists = []
            // if (loading) return <div>Loading accounts</div>
            // if (error) return <div>Error</div>
                if (loading || error) {
                    typeLists = [];
                } else {
                    typeLists = data.__type.enumValues;
                }
            return (
            <Form.Group controlId="formGridState">
            <Form.Label>Account Type</Form.Label>
            <Form.Control as="select"
            value={this.state.value}
            onChange={e => this.setState({ accountType: e.target.value })}
            placeholder="Select Account"
            >
            <option>Select Account Type</option>
            {typeLists.map(type => (
                <option key={type.name} value={type.name}>
                {type.name}
                </option>
            ))}
            </Form.Control>
            </Form.Group>
            )
          }}
        </Query>
        <Query query={ACCOUNTCATEGORY_QUERY}>
          {({ loading, error, data }) => {
              let categoryLists = []
            // if (loading) return <div>Loading accounts</div>
            // if (error) return <div>Error</div>
                if (loading || error) {
                    categoryLists = [];
                } else {
                    categoryLists = data.__type.enumValues;
                }
            return (

                <Form.Group controlId="formGridState">
                <Form.Label>Account Category</Form.Label>
                <Form.Control as="select"
                value={this.state.value}
                onChange={e => this.setState({ accountCategory: e.target.value })}
                placeholder="Select Account Category"
                >
                <option>Select Account Category</option>
                {categoryLists.map(category => (
                    <option key={category.name} value={category.name}>
                    {category.name}
                    </option>
                ))}
                </Form.Control>
                </Form.Group>
            )
          }}
        </Query>
        <ButtonGroup>
          <Mutation
            mutation={CREATEACCCOUNT_MUTATION}
            variables={{ name, number, accountType, accountCategory }}
          >
            {CreateAccountMutation => (
              <Button variant="secondary" onClick={CreateAccountMutation} >
                Submit
              </Button>
            )}
          </Mutation>
          <Button variant="danger" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default CreateAccount;
