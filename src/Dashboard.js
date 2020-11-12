import React, {Component, useState} from 'react';
import styled from 'styled-components';
import CanvasJSReact from './canvasjs.react';
import ReactFlexyTable from "react-flexy-table";
import dataList from './jsonData';
import './tableUser.css';
import dashboardLineChart from './dashboardLineChart';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Styles = styled.div`
  .left-half, .right-half{
    display: inline-block;
    width: 45%;
    // padding: 1rem;
    // background-color: white;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 250px;
    margin-top: 1px;
  };
  .table-div{
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 20px;
    // float: 'right';
    // padding-left: 50px;
    margin-bottom: 20px;
  };
  p{
    font-size: 20px;
  };
  .left-compo{
    border-radius: 20px;
    // padding-left: 0.7rem;
    padding: 0.5rem 0;
    background-color: white;
    // margin-top: 15px;
    // height: 110px;
    // justify-content: 'space-between';
    flex: 1;
    text-align: center;
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
  const options = {
    backgroundColor: "transparent",
    // colorSet:['#d9e1ff', '#b3cfff', '#80dbc9', '#65d0d0', '#8ec6f7'],
    data: [{
      indexLabelFontColor: "#bb6042",
      indexLabelLineColor: "#bb6042",
      type: "pie",
      startAngle: 160,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 33, label: "Ha Noi", color: '#a84d2f' },
        { y: 31, label: "Ho Chi Minh", color: '#bb6042' },
        { y: 15, label: "Da Nang", color: '#cf7356' },
        { y: 9, label: "Nha Trang", color: '#e28769' },
        {y: 21, label: "Others", color: '#f59a7c' }
      ]
    }]
    };
    const optionsLine = {
      backgroundColor: "transparent",
      height: 250,
      margin: 30,
      animationEnabled: true,
      // theme: "light2", // "light1", "dark1", "dark2"
      title:{
          text: "Bounce Rate by Week of Year"
      },
      axisY: {
          title: "Bounce Rate",
          includeZero: false,
          suffix: "%"
      },
      axisX: {
          title: "Week of Year",
          prefix: "W",
          interval: 2
      },
      data: [{
          type: "line",
          toolTipContent: "Week {x}: {y}%",
          dataPoints: [
              { x: 1, y: 64 },
              { x: 2, y: 61 },
              { x: 3, y: 64 },
              { x: 4, y: 62 },
              { x: 5, y: 64 },
              { x: 6, y: 60 },
              { x: 7, y: 58 },
              { x: 8, y: 59 },
              { x: 9, y: 53 },
              { x: 10, y: 54 },
              { x: 11, y: 61 },
              { x: 12, y: 60 },
              { x: 13, y: 55 },
              { x: 15, y: 56 },
              { x: 18, y: 63 },
              { x: 19, y: 58 },
              { x: 20, y: 54 },
              { x: 21, y: 59 },
              { x: 23, y: 59 }
          ]
      }]
  }
  return(
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', }}>
    <Styles>
      <div style={{display: 'flex', flexDirection: 'row', }}>
      <div className="left-half" style={{flex:1, flexDirection: 'column', justifyContent: "space-between"}} >
        <div className="left-compo" style={{marginBottom: 20}}>
          <h4>Active User</h4>
          <p className= "graText" >300.000/400.000</p>
        </div>
        <div className="left-compo">
          <h4>Total calls</h4>
          <p className="graText">3.000.000/4.500.000</p>
        </div>
      </div>
      <div className="right-half" style={{backgroundColor: 'white', flex:2, justifyContent: 'center'}}>
        <CanvasJSChart options = {optionsLine} />
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div style={{flex: 1, padding: 10, }}>
        <CanvasJSChart options = {options}/>
        </div>
      <div className="table-div" style={{ flex: 2}}>
      <ReactFlexyTable 
      data={dataList} 
      sortable 
      globalSearch
      pageSize={5}
      // onPageChange={false}
      />
      </div>
      </div>
      
    </Styles>
    </div>
    
  )
}