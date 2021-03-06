import React, {Component, useState} from 'react';
import './backgroundInner.css';
import './analytics.css';
import ReactFlexyTable from "react-flexy-table";
import '../../tableUser.css';
import dataList from '../../loan_info.json';
import Chart from "react-apexcharts";
// import {totalMoneyOverTime, geoDistribution, totalTimeOfEachCall, totalRecharge } from '../../dataGraph';
import {loan} from './loanGraph'
export default function loanAnalytics(){
  
  return(
    // <div className="backgroundInner">
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', height: '100vh'}}>
      <div className="table-div" style={{flex: 1, padding: 0}}>
        <h4 style={{marginLeft: 15, marginTop: 15, paddingTop: 10, paddingBottom: 10}}>Loan, return, in progress</h4>
        <Chart options={loan.options} 
          series={loan.series} type="bar" height="85%" width="100%" style={{marginTop: 0, alignItem: 'center'}}/>          
      </div>
      <div className="table-div" style={{flex: 1, padding: 0}}>
        <ReactFlexyTable 
          data={dataList} 
          sortable 
          globalSearch
          pageSize={5}
        />
      </div>
    </div>
  )
}