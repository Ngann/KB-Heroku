import React, { Component, Suspense, lazy } from 'react'

const DoughnutCharts = lazy(()=> import('./DoughnutCharts'))
const PieCharts = lazy(()=> import('./PieCharts'))
const LineChart = lazy(()=> import('./LineChart'))

const containerStyle = {
  marginTop: '10%',
  backgroundColor: '#FDFFFC'
};



class DashboardControl extends Component {

  render() {
    return (
      <div className="container" style={containerStyle}>
        <Suspense fallback={<div>Loading...</div>}>
          <DoughnutCharts/>
          <PieCharts/>
          <LineChart/>
        </Suspense>
      </div>
    )
  }
}

export default DashboardControl
