import React, { Component} from 'react';
import CreateCustomerTwo from './CreateCustomerTwo';
import CustomerListTwo from './CustomerListTwo';



class CustomerControl extends Component {
    render(){
        return(
            <div>Main Control
                <CreateCustomerTwo/>
                <CustomerListTwo/>
            </div>
        )
    }
}

export default CustomerControl;