import React, { Component} from 'react';
import CreateCustomerTwo from './CreateCustomerTwo';
import CustomerListTwo from './CustomerListTwo';
import { Button, ButtonGroup } from "react-bootstrap";
import SearchBills from './SearchBills';

const buttonStyle = {
    padding: "2%",
    backgroundColor: "#FDFFFC",
    border: "1px solid lightgrey"
  };

class CustomerControl extends Component {
    constructor(props){
        super(props)
        this.state ={
            customerForm: false,
            search: false,
            addButton: true,
            searchButton: true
        }

        this.openCustomerForm = this.openCustomerForm.bind(this)
        this.openSearch = this.openSearch.bind(this)
    }

openCustomerForm() {
    this.setState({
        customerForm: !this.state.customerForm,
        addButton: !this.state.addButton
    })
}

openSearch() {
    this.setState({
        search: !this.state.search,
        searchButton: !this.state.searchButton
    })
}

    render(){
        // console.log(this.state)
        return(
            <div>
                <div className="d-flex flex-column" style={buttonStyle}>
                    <ButtonGroup className="mt-3">
                        <Button size="md" variant="outline-success" onClick={this.openCustomerForm}>{this.state.addButton ? 'Add Customer': 'Close Customer Form' }</Button> 
                        <Button size="md" variant="outline-success"> Invoice Payments</Button>
                        <Button size="md" variant="outline-success"> Reports</Button>
                        <Button size="md" variant="outline-success" onClick={this.openSearch}> {this.state.searchButton ? 'Search': 'Close Search'}</Button>
                    </ButtonGroup>
                </div>
                 {this.state.customerForm ? <CreateCustomerTwo/> : null }
                 {this.state.search ? <SearchBills/> : null }
                <CustomerListTwo/>
            </div>
        )
    }
}

export default CustomerControl;
