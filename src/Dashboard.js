import React, {Component, useState} from 'react';
import styled from 'styled-components';
import CanvasJSReact from './canvasjs.react';
import ReactFlexyTable from "react-flexy-table";
import dataList from './jsonData';
import './tableUser.css';
import Chart from "react-apexcharts";

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
  
    const optionsLine = {
      series: [{
        name: "Calls",
        data: [10, 41, 35, 51, 49, 62, 69]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      // title: {
      //   text: 'Total calls by day',
      //   align: 'left'
      // },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['1', '5', '10', '15', '20','25','30']
      }
    },
  }
  const optionApexPie ={
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Ha Noi', 'Ho Chi Minh', 'Da Nang', 'Nha Trang', 'Others'],
      theme: {
        monochrome: {
          enabled: true,
          color: '#a84d2f',
        },
        title: {
          text: "Monochrome Pie"
        },
        responsive: [{
          breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
      }]
  }}}
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
      <div className="right-half" style={{backgroundColor: 'white', flex:2, justifyContent: 'space-between'}}>
        {/* <CanvasJSChart options = {optionsLine} /> */}
        <h4 style={{marginLeft: 15, marginTop: 15}}>Total calls by day</h4>
        <Chart options={optionsLine.options} 
        series={optionsLine.series} type="line" height="200" style={{marginTop: 0}}/>
      </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', }}>
        <div style={{flex: 1, padding: 10, }}>
        {/* <CanvasJSChart options = {options}/> */}
        <Chart options={optionApexPie.options} series={optionApexPie.series} type="pie"/>
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