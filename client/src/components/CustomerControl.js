import React, { Component } from "react";
import CreateCustomerTwo from "./CreateCustomerTwo";
import CustomerListTwo from "./CustomerListTwo";
import { Button, ButtonGroup } from "react-bootstrap";
import SearchInvoicesTwo from "./SearchInvoicesTwo";
import InvoiceListTwo from "./InvoiceListTwo";

const buttonStyle = {
  padding: "2%",
  backgroundColor: "#FDFFFC",
  border: "1px solid lightgrey"
};

class CustomerControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerForm: false,
      search: false,
      addButton: true,
      searchButton: true,
      customerList: true,
      invoiceList: false,
      paid: false
    };

    this.openCustomerForm = this.openCustomerForm.bind(this);
    this.openSearch = this.openSearch.bind(this);
    this.openInvoices = this.openInvoices.bind(this);
  }

  openCustomerForm() {
    this.setState({
      customerForm: !this.state.customerForm,
      addButton: !this.state.addButton,
      customerList: true,
      invoiceList: false,
      search: false
    });
  }

  openSearch() {
    this.setState({
      search: !this.state.search,
      searchButton: !this.state.searchButton,
      customerForm: false,
      customerList: false,
      invoiceList: false
    });
  }

  openInvoices() {
    this.setState({
      invoiceList: !this.state.invoiceList,
      search: false,
      customerList: false,
      customerForm: false
    });
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <div className="d-flex flex-column" style={buttonStyle}>
          <ButtonGroup className="mt-3">
            <Button
              size="md"
              variant="outline-success"
              onClick={this.openCustomerForm}
            >
              {this.state.addButton ? "Add Customer" : "Close Customer Form"}
            </Button>
            <Button
              size="md"
              variant="outline-success"
              onClick={this.openInvoices}
            >
              Invoices
            </Button>
            <Button size="md" variant="outline-success">
              Invoice Payments
            </Button>
            <Button size="md" variant="outline-success">   
              Reports
            </Button>
            <Button
              size="md"
              variant="outline-success"
              onClick={this.openSearch}
            >
              {this.state.searchButton ? "Search" : "Close Search"}
            </Button>
          </ButtonGroup>
        </div>
        {this.state.customerForm ? <CreateCustomerTwo /> : null}
        {this.state.search ? <SearchInvoicesTwo /> : null}
        {this.state.customerList ? <CustomerListTwo /> : null}
        {this.state.invoiceList ? (
          <InvoiceListTwo paid={this.state.paid} />
        ) : null}
      </div>
    );
  }
}

export default CustomerControl;

//I passed the customers data to the customerlist or child component, in the parent component the information renders however in the child component route gives an errors cannot read property of map. Moved data back to child.
