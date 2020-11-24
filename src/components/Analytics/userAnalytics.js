import React, {Component, useState} from 'react';
import '../../backgroundColor.css';
import './analytics.css';
import ReactFlexyTable from "react-flexy-table";
import '../../tableUser.css';
import dataList from '../../user_overall';
import Chart from "react-apexcharts";
import {dataUsed} from './analyticsGraph';
import {moneyFlow, totalCalls} from './userGraph';

console.log(dataList)

export default function userAnalytics(){
  return(
    // <div className="backgroundInner">
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', height: '110vh' }}>
      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{flex: 1, display: 'flex', justifyContent: 'space-between'}}>
          <div className="table-div" style={{flex: 1, padding: 0}}>
            <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Total calls</h4>
            <Chart options={totalCalls.options} 
              series={totalCalls.series} type="line" height="75%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
          <div className="table-div" style={{flex: 1, padding: 0}}>
            <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Amount of data used</h4>
            <Chart options={dataUsed.options} 
              series={dataUsed.series} type="bar" height="75%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
          <div className="table-div" style={{flex: 1, padding: 0}}>
            <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Money Flow</h4>
            <Chart options={moneyFlow.options} 
            series={moneyFlow.series} type="bar" height="75%" width="100%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
        </div>
        
        <div style={{flex: 1, justifyContent: 'space-between', padding: 10}}>
        <ReactFlexyTable 
            data={dataList} 
            sortable 
          globalSearch
          pageSize={5}
          />
        </div>
      </div>
    </div>
    // </div>
  )
}