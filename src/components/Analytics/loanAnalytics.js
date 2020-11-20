import React, {Component, useState} from 'react';
import './backgroundInner.css';
import './analytics.css';
import ReactFlexyTable from "react-flexy-table";
import '../../tableUser.css';
import dataList from '../../jsonData';
import Chart from "react-apexcharts";
import {totalMoneyOverTime, geoDistribution, totalTimeOfEachCall, totalRecharge } from '../../dataGraph';

export default function loanAnalytics(){
  return(
    <div className="backgroundInner">
      <div className="table-div" style={{flex: 1, padding: 0}}>
            <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Total calls</h4>
            <Chart options={totalTimeOfEachCall.options} 
              series={totalTimeOfEachCall.series} type="line" height="75%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
    </div>
  )
}