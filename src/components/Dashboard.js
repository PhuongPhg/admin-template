import React, {Component, useState} from 'react';
import styled from 'styled-components';
import ReactFlexyTable from "react-flexy-table";
import dataList from '../jsonData';
import '../tableUser.css';
import Chart from "react-apexcharts";
import '../backgroundColor.css';
import {totalMoneyOverTime, geoDistribution, totalTimeOfEachCall, totalRecharge } from '../dataGraph';


const Styles = styled.div`
  .left-half, .right-half{
    display: inline-block;
    width: 45%;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 260px;
    margin-top: 1px;
  };
  .table-div{
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
  };
  p{
    font-size: 20px;
  };
  .left-compo{
    border-radius: 20px;
    padding: 0.5rem 0;
    background-color: white;
    flex: 1;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  };
  .graText{
    text-transform: uppercase;
	background: linear-gradient(to right, #19adb1 0%,  #0a6dc3 100%);
	-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 30px;
  font-weight: bold;
  }`;
  
export default function Dashboard(){
  const [content, setContent] = useState("");
  
  return(
    
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', }}>
    {/* <div className="backgroundInner"> */}
    {/* <Sidebar /> */}
    <Styles>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div className="left-half" style={{flex:1, flexDirection: 'column', justifyContent: "space-between"}} >
          <div className="left-compo" style={{marginBottom: 20}}>
            <h4 style={{marginTop: 10}}>Active User</h4>
            <p className= "graText" >300.000/400.000</p>
          </div>
          <div className="left-compo">
            <h4 style={{marginTop: 10}}>Total number of successful calls</h4>
            <p className="graText">300.500.000</p>
          </div>
        </div>
        <div className="right-half" style={{backgroundColor: 'white', flex:2, justifyContent: 'space-between'}}>
          <h4 style={{marginLeft: 15, marginTop: 15}}>The total amount of money spent over time</h4>
          <Chart options={totalMoneyOverTime .options} 
            series={totalMoneyOverTime .series} type="area" height="200" width="97%" style={{marginTop: 0, alignItem: 'center'}}/>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div className="table-div" style={{flex: 1, padding: 0}}>
          <h4 style={{marginLeft: 15, marginTop: 15, paddingBottom: 10}}>User's geographical distribution</h4>
          <Chart options={geoDistribution.options} series={geoDistribution.series} type="pie"/>
        </div>
        <div className="table-div" style={{ flex: 2, padding: 10}}>
          <ReactFlexyTable 
            data={dataList} 
            sortable 
          globalSearch
          pageSize={5}
          />
          {/* <h4 style={{marginLeft: 15, marginTop: 15}}>The total time the call was completed</h4>
          <Chart options={totalTimeOfEachCall.options} 
            series={totalTimeOfEachCall.series} type="line" height="75%" width="100%" style={{marginTop: 0, alignItem: 'center'}}/> */}
        </div>
        {/* <div className="table-div" style={{ flex: 1, padding: 10}}>
          <h4 style={{marginLeft: 15, marginTop: 15}}>Total amount of data used</h4>
          <Chart options={totalTimeOfEachCall.options} 
            series={totalTimeOfEachCall.series} type="area" height="75%" width="100%" style={{marginTop: 0, alignItem: 'center'}}/>
        </div> */}
      </div>
    </Styles>
    </div>
    
  )
}