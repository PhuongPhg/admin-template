import React, {Component, useState} from 'react';
import styled from 'styled-components';
import CanvasJSReact from './canvasjs.react';

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
    margin-top: 20px;
  };
  .table-div{
    padding: 1rem;
    background-color: white;
    border-radius: 20px;
    margin-left: 10px;
    margin-right: 20px;
    // float: 'right';
    // padding-left: 50px;
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
  }`;
  
export default function Dashboard(){
  const [content, setContent] = useState("");
  const options = {
    backgroundColor: "transparent",
    colorSet:['#d9e1ff', '#b3cfff', '#80dbc9', '#65d0d0', '#8ec6f7'],
    data: [{
      indexLabelFontColor: "white",
      indexLabelLineColor: "white",
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}%",
      // showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "Direct", color: '#d9e1ff' },
        { y: 49, label: "Organic Search", color: '#3ebdff' },
        { y: 9, label: "Paid Search", color: '#0056ec' },
        { y: 5, label: "Referral", color: '#65d0d0' },
        { y: 19, label: "Social", color: '#2898e0' }
      ]
    }]
    }
  return(
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#237c56', overflow: 'hidden', }}>
    <Styles>
      <div style={{display: 'flex', flexDirection: 'row', }}>
      <div className="left-half" style={{flex:1, flexDirection: 'column', justifyContent: "space-between"}} >
        <div className="left-compo" style={{marginBottom: 20}}>
          <h4>Active User</h4>
          <p style={{fontSize: 30, color: '#237c56', fontWeight: 'bold'}}>300.000/400.000</p>
        </div>
        <div className="left-compo">
          <h4>Active User</h4>
          <p style={{fontSize: 30, color: '#237c56', fontWeight: 'bold'}}>300.000/400.000</p>
        </div>
      </div>
      <div className="right-half" style={{backgroundColor: 'white', flex:2}}>
        <p>right now</p>
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div style={{flex: 1, padding: 10}}>
        <CanvasJSChart options = {options}/>
        </div>
      <div className="table-div" style={{ flex: 2}}>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
        <p>Hiiiiiiiiiiiiiiiiiiiiiiiii</p>
      </div>
      </div>
    </Styles>
    </div>
    
  )
}