import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import logo from '../assets/images/logo.png'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact"

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

// const containerStyle = {
//   // backgroundColor: '#FDFFFC'
//   backgroundColor: "#020100"
// };

const cardStyle = {
  width: '45%',
  margin: '0 auto',
  border: '1px solid #020100',
  marginTop: '75px',
  // backgroundColor: "#020100"
  // backgroundColor: '#FDFFFC'
};

// const rowStyle = {
//   // width: '45%',
//   float: 'none',
//   margin: '0 auto',
//   marginTop:'70px',
//   // marginRight:'25%',
//   // marginLeft:'25%',
//   // paddingTop:'25%',
//   // paddingBottom:'25%',
//   backgroundColor: '#235789'
// };

const buttonStyle = {
  backgroundColor: "#00acc1",
  color: 'white'
};

class Login extends Component {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state
    return (
      <MDBContainer 
      // style={containerStyle}
      >
        <MDBRow 
        // style={rowStyle}
        >
          <MDBCol >
            <MDBCard style={cardStyle}>
              <MDBCardBody >
                <MDBCardHeader  className="form-header warm-flame-gradient rounded">
                  <h3 className="my-3" >

                    <MDBIcon  icon="lock" />{login ? <img
                      src={logo}
                      width="160"
                      height="80"
                      className="d-inline-block align-center"
                      alt="Login"
                    /> : 'Sign Up'}
                  </h3>
                </MDBCardHeader>
                {!login && (
                  <div>
                    <label
                      htmlFor="defaultFormEmailEx"
                      className="grey-text font-weight-light">
                      Your name
                    </label>
                    <input
                      className="form-control"
                      value={name}
                      onChange={e => this.setState({ name: e.target.value })}
                    type="text"/>
                  </div>
                )}
                <label
                  htmlFor="defaultFormEmailEx"
                  className="grey-text font-weight-light"
                >
                  Your email
                </label>
                <input
                  className="form-control"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                  type="text"
                />

                <label
                  htmlFor="defaultFormPasswordEx"
                  className="grey-text font-weight-light"
                >
                  Your password
                </label>
                <input
                  value={password}
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  className="form-control"
                />
                <div className="text-center mt-4">
                <Mutation
                  mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                  variables={{ email, password, name }}
                  onCompleted={data => this._confirm(data)}
                >
                {mutation => (
                  <MDBBtn className="mb-3" style={buttonStyle} onClick={mutation}>
                  {login ? 'Login' : 'Create'}
                  </MDBBtn>
                )}
                </Mutation>
                </div>
                <MDBModalFooter>
                  <div className="font-weight-light" onClick={() => this.setState({ login: !login })}>
                  {login ? 'Not a member? Sign Up' : 'Already have an account?'}
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    //   <Form style={rowStyle} >
    //   <Form.Group controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" />
    //     <Form.Text className="text-muted">
    //       We'll never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password" />
    //   </Form.Group>
    //   <Form.Group controlId="formBasicChecbox">
    //     <Form.Check type="checkbox" label="Check me out" />
    //   </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
