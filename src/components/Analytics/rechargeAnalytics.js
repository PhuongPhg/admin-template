import React, {Component, useState} from 'react';
import './backgroundInner.css';
import './analytics.css';
import Chart from "react-apexcharts";
import {totalMoneyOverTime, geoDistribution, totalTimeOfEachCall, totalRecharge } from '../../dataGraph';

export default function rechargeAnalytics(){
  return(
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', height: '90vh'}}>
      <div style={{display: "flex"}}>
        <div className="table-div" style={{flex: 1}}>
          <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Percentage of card/virtual</h4>
          <Chart options={geoDistribution.options} series={geoDistribution.series} type="pie"/>
        </div>

        <div className="table-div" style={{flex: 2}}>
        <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Total recharged</h4>
            <Chart options={totalTimeOfEachCall.options} 
              series={totalTimeOfEachCall.series} type="line" height="90%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/>
        </div>
      </div>
    </div>
  )
}