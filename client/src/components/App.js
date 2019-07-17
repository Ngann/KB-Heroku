/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
// @flow
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import VendorList from './VendorList';
import BillList from './BillList';
import CustomerList from './CustomerList';
import InvoiceList from './InvoiceList';
import CreateVendor from './CreateVendor';
import CreateCustomer from './CreateCustomer';
import CreateBill from './CreateBill';
import CreateInvoice from './CreateInvoice';
import Header from './Header';
import Login from './Login';
import DashboardControl from './DashboardControl';
import SearchBills from './SearchBills';
import SearchInvoices from './SearchInvoices';
import CreateAccount from './CreateAccount';
// import AccountList from './AccountList';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/chart" />} />
      <Route exact path="/createvendor" component={CreateVendor} />
      <Route exact path="/createcustomer" component={CreateCustomer} />
      <Route exact path="/createbill" component={CreateBill} />
      <Route exact path="/createinvoice" component={CreateInvoice} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/searchbills" component={SearchBills} />
      <Route exact path="/searchinvoices" component={SearchInvoices} />
      <Route exact path="/vendor" component={VendorList} />
      <Route exact path="/customer" component={CustomerList} />
      <Route exact path="/bill" component={BillList} />
      <Route exact path="/invoice" component={InvoiceList} />
      <Route exact path="/chart" component={DashboardControl} />
      <Route exact path="/createaccount" component={CreateAccount} />
      {/* <Route exact path="/accountlist" component={AccountList} /> */}
    </Switch>
  </div>
);

export default App;
