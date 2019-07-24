import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Invoice from './Invoice'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const INVOICE_SEARCH_QUERY = gql`
  query InvoiceSearchQuery($filter: String!, $amountFilter: Int) {
    searchInvoices(filter: $filter, amountFilter: $amountFilter) {
      invoices {
        id
        customer
        date
        account
        amount
      }
    }
  }
`
const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC',
  align: 'center'
};


class SearchInvoices extends Component {
  state = {
    invoices: [],
    filter: '',
    amountFilter: '',
  }

  render() {
    return (
      <div className="container" style={containerStyle}>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => this.setState({ filter: e.target.value })}/>
          <Button variant="outline-primary" onClick={() => this._executeSearch()}>Search</Button>
        </Form>
        {this.state.invoices.map((invoice, index) => (
          <Invoice key={invoice.id} invoice={invoice} index={index} />
        ))}
      </div>
    )
  }


  _executeSearch = async () => {
    const { filter, amountFilter } = this.state
    const result = await this.props.client.query({
      query: INVOICE_SEARCH_QUERY,
      variables: { filter, amountFilter },
    })
    const invoices = result.data.searchInvoices.invoices
    this.setState({ invoices })
  }
}


export default withApollo(SearchInvoices)
