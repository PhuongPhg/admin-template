import React, {Component, useState} from 'react';
import './backgroundInner.css';
import './analytics.css';
import Chart from "react-apexcharts";
import {totalMoneyOverTime, geoDistribution, totalTimeOfEachCall, totalRecharge } from '../../dataGraph';
import {cardAndVirtual} from './rechargeGraph';
import '../../tableUser.css';
import dataList from '../../recharge_info';
import ReactFlexyTable from "react-flexy-table";

export default function rechargeAnalytics(){
  return(
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', height: '90vh'}}>
      <div style={{display: "flex"}}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <div className="table-div" style={{flex: 1, textAlign: 'center'}}>
            <p style={{marginTop: 10, fontSize: '1.5rem'}}>Total recharge</p>
            <p className="graText" style={{fontSize: 30, fontWeight: 'bold'}}>5.398.652.785</p>
          </div>
          <div className="table-div" style={{flex: 2}}>
            <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Percentage of card/virtual</h4>
            <Chart options={cardAndVirtual.options} series={cardAndVirtual.series} type="pie" width="90%"/>
          </div>
        </div>

        <div className="table-div" style={{flex: 2}}>
        <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>Recharged Unit</h4>
            {/* <Chart options={totalTimeOfEachCall.options} 
              series={totalTimeOfEachCall.series} type="line" height="90%" width="90%" style={{marginTop: 0, alignItem: 'center'}}/> */}
              <ReactFlexyTable 
            data={dataList} 
            sortable 
          globalSearch
          pageSize={5}
          />
        </div>
      </div>
    </div>
  )
}