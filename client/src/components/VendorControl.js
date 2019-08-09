import React, { Component} from 'react';
import CreateVendor from './CreateVendor';
import VendorList from './VendorList';
import { Button, ButtonGroup } from "react-bootstrap";
import SearchBills from './SearchBills';

const buttonStyle = {
    padding: "2%",
    backgroundColor: "#FDFFFC",
    border: "1px solid lightgrey"
  };

class VendorControl extends Component {
    constructor(props){
        super(props)
        this.state ={
            vendorForm: false,
            search: false,
            addButton: true,
            searchButton: true
        }

        this.openvendorForm = this.openvendorForm.bind(this)
        this.openSearch = this.openSearch.bind(this)
    }

openvendorForm() {
    this.setState({
        vendorForm: !this.state.vendorForm,
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
                        <Button size="md" variant="outline-success" onClick={this.openvendorForm}>{this.state.addButton ? 'Add vendor': 'Close vendor Form' }</Button> 
                        <Button size="md" variant="outline-success"> Invoice Payments</Button>
                        <Button size="md" variant="outline-success"> Reports</Button>
                        <Button size="md" variant="outline-success" onClick={this.openSearch}> {this.state.searchButton ? 'Search': 'Close Search'}</Button>
                    </ButtonGroup>
                </div>
                 {this.state.vendorForm ? <CreateVendor/> : null }
                 {this.state.search ? <SearchBills/> : null }
                <VendorList/>
            </div>
        )
    }
}

export default VendorControl;
