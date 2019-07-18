/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
// @flow

import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
const VendorList = lazy(()=>  import('./VendorList')) ;
const BillList = lazy(()=>  import('./BillList')) ;
const CustomerList = lazy(()=>  import('./CustomerList')) ;
const InvoiceList = lazy(()=>  import('./InvoiceList')) ;
const CreateVendor = lazy(()=>  import('./CreateVendor')) ;
const CreateCustomer = lazy(()=>  import('./CreateCustomer')) ;
const CreateBill = lazy(()=>  import('./CreateBill')) ;
const CreateInvoice = lazy(()=>  import('./CreateInvoice')) ;

const Login = lazy(()=>  import('./Login')) ;
const DashboardControl = lazy(()=>  import('./DashboardControl'));
const SearchBills = lazy(()=>  import('./SearchBills')) ;
const SearchInvoices = lazy(()=>  import('./SearchInvoices')) ;
const CreateAccount = lazy(()=>  import('./CreateAccount')) ;
const AccountList = lazy(() => import('./AccountList'));

const App = () => (
  <div className="App">
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/accountlist" component={AccountList} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
