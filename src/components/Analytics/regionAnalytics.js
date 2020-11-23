import React, {Component, useState} from 'react';
import './backgroundInner.css';
import './analytics.css';
import Chart from "react-apexcharts";
import {totalCallTime, totalData, rateOfUser, dataLoanAndRecharge} from './regionGraph';

export default function regionAnalytics(){
  return(
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', height: '100vh'}}>
      <div style={{display: "flex", flexDirection: 'column'}}>
        <div style={{flex: 1, display: 'flex'}}>
          <div className="table-div" style={{flex: 1}}>
            <h4 style={{marginTop: 10}}>Total call times by region</h4>
            <Chart options={totalCallTime.options} 
              series={totalCallTime.series} type="bar" height="90%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>

          <div className="table-div" style={{flex: 1}}>
            <h4 style={{marginTop: 10}}>Total data used by region</h4>
            <Chart options={totalData.options} 
              series={totalData.series} type="bar" height="90%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
        </div>

        <div style={{flex: 1, display: 'flex'}}>
          <div className="table-div" style={{flex: 1}}>
            <h4 style={{marginTop: 10}}>Rate of users per region</h4>
            <Chart options={rateOfUser.options} 
              series={rateOfUser.series} type="pie" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
          <div className="table-div" style={{flex: 2}}>
            <h4 style={{marginTop: 10}}>Total loand and Recharge by region</h4>
            <Chart options={dataLoanAndRecharge.options} 
              series={dataLoanAndRecharge.series} type="bar" height="90%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}