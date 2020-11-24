import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactFlexyTable from "react-flexy-table";
import dataList from '../jsonData';
import '../tableUser.css';
import Chart from "react-apexcharts";
import '../backgroundColor.css';
import {totalMoneyOverTime, geoDistribution, callTimeAndDataUsage } from './dashboardGraph';
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";

const Styles = styled.div`
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
  const [test, setTest] = useState("");
  const additionalCols = [
    {
      header: 'Actions',
      td: (data) => {
        return (
          <div>
            <SearchIcon
              onClick={() => console.log('this is delete for id ' + data.id)}
            />
          </div>
        )
      }
    }
  ]
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/getUserDetail").then(res => {
  //     setTest(res.data);
  //     // console.log(test);
  //   });
  // })
  return(
    
    <div style={{marginLeft: 140, borderTopLeftRadius: 20,  paddingLeft: 20, paddingTop: 20, backgroundColor: '#e8f1ed', overflow: 'hidden', }}>
    <Styles>
      {/* <div style={{display: 'flex'}}>
        <div style={{display: "flex", flexDirection: 'column'}}>
          <div className="table-div" style={{marginBottom: 20, flex: 1, textAlign: 'center'}}>
            <p style={{fontSize: '1.5rem',marginTop: 10}}>Active User</p>
            <p className= "graText" >300.000/400.000</p>
          </div>
          <div className="table-div" style={{flex: 1, textAlign: 'center'}}>
            <p style={{marginTop: 10, fontSize: '1.5rem'}}>Total number of successful calls</p>
            <p className="graText">300.500.000</p>
          </div>
          <div className="table-div" style={{flex: 2, padding: 0}}>
            <p style={{marginLeft: 15, marginTop: 15, paddingBottom: 10,fontSize: '1.5rem'}}>User's geographical distribution</p>
            <Chart options={geoDistribution.options} series={geoDistribution.series} type="pie" width="90%"/>
          </div>
        </div>

        <div style={{flex: 2}}>
          <div className="table-div"  style={{flex: 1}}>
            <h4 style={{marginLeft: 15, marginTop: 15}}>The total amount of money spent over time</h4>
            <Chart options={totalMoneyOverTime .options} 
              series={totalMoneyOverTime .series} type="line" height="90%" width="97%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
          <div className="table-div"  style={{flex: 1}}>
            <h4 style={{marginLeft: 15, marginTop: 15}}>Call time and data usage</h4>
            <Chart options={callTimeAndDataUsage.options} 
              series={callTimeAndDataUsage.series} type="line" height="90%" width="97%" style={{marginTop: 0, alignItem: 'center'}}/>
          </div>
        </div>
      </div> */}


      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <div className="table-div" style={{marginBottom: 20, flex: 1, textAlign: 'center'}}>
            <p style={{fontSize: '1.5rem',marginTop: 10}}>Active User</p>
            <p className= "graText" >115.134</p>
          </div>
          <div className="table-div" style={{flex: 1, textAlign: 'center'}}>
            <p style={{marginTop: 10, fontSize: '1.5rem'}}>Total number of successful calls</p>
            <p className="graText"> 24.428.087</p>
          </div>
        </div>
        <div className="table-div" style={{flex: 2}}>
          <h4 style={{marginLeft: 15, marginTop: 15}}>The total amount of money spent over time</h4>
          <Chart options={totalMoneyOverTime .options} 
            series={totalMoneyOverTime .series} type="line" height="200" width="97%" style={{marginTop: 0, alignItem: 'center'}}/>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div className="table-div" style={{flex: 1, padding: 0}}>
          <p style={{marginLeft: 15, marginTop: 15, paddingBottom: 10,fontSize: '1.5rem'}}>User's geographical distribution</p>
          <Chart options={geoDistribution.options} series={geoDistribution.series} type="pie" width="90%"/>
        </div>
        <div className="table-div" style={{ flex: 2, padding: 10}}>
        < h4 style={{marginLeft: 15, marginTop: 15}}>Data usage</h4>
          <Chart options={callTimeAndDataUsage.options} 
              series={callTimeAndDataUsage.series} type="line" height="70%" width="97%" style={{marginTop: 0, alignItem: 'center'}}/>
        </div>
      </div>
    </Styles>
    </div>
    
  )
}