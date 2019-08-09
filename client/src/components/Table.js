import React, { Fragment, Component } from "react";
import { ButtonGroup, Table, Button, Modal, Form, Col } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { datas } = this.props;

    let header = Object.getOwnPropertyNames(datas[0]);
    return (
      <Table striped hover size="sm">
        <thead>
          <tr>
            {header.map((key, i) => {
              return <th key={i}>{key.toUpperCase()}</th>;
            })}
            <th>ACTION</th>
          </tr>
        </thead>
        <Fragment>
          <tbody>
            {datas.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.contact}</td>
                <td>{data.address}</td>
                <td>{data.city}</td>
                <td>{data.state}</td>
                <td>
                  <ButtonGroup size="sm">
                    <Button variant="outline-secondary">Edit</Button>
                    <Button variant="outline-secondary"> Delete</Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Fragment>
      </Table>
    );
  }
}

export default List;
