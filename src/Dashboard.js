import React, {Component, useState} from 'react';
// import "react-flexy-table/dist/index.css"
import './App.css';
import './tableUser.css';
import { Pie } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactToolTip from 'react-tooltip';
import MapChart from './MapChart';
import CountUp from 'react-countup';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { faUser} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WebFont from 'webfontloader';
import ReactFlexyTable from "react-flexy-table"
import dataList from './jsonData';

WebFont.load({
  google: {
    families: ['Roboto Web:300,400,700', 'sans-serif']
  }
});
const activeUsers = {
    labels: ['12-18', '19-30','30-60','>60'],
    datasets: [
        {
        label: 'Rainfall',
        backgroundColor: [
          // '#B21F00',
          // '#C9DE00',
          // '#2FDE00',
          // '#00A6B4',
          '#0E6980', '#159AD0', '#4EBDB8', '#CADEE4'
          
        ],
        hoverBackgroundColor: [
        // '#501800',
        // '#4B5000',
        // '#175000',
        // '#003350',
        '#073440', '#0a4c68', '#24615e', '#487e8e'
        ],
        data: [65, 59, 80, 81]
        }
    ]
};
const active={
  active: 4745300,
  total: 5400000,
};
function counterForm (num){
  if(num>1000) return <p>{num%1000}k</p>
  else return<p>{num}</p>
}
export default function Dashboard(){
  const [content, setContent] = useState("");
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    counter <active.active && setTimeout(() => setCounter(counter + 14210), 0.000005);
    if(counter > active.active) setTimeout(() => setCounter(active.active), 10);
  }, [counter]);
  
  return(
    <div>
      <h5>Dashboard</h5>
      <Row>
        <Col lg={4}>
          <Pie
            // width={250}
            height={'250'}
            data={activeUsers}
            options={{
              title:{
                display:true,
                text:'Ages',
                fontSize:20
              },
              legend:{
                display:true,
                position:'bottom',
              },
              maintainAspectRatio:false
            }}
          />
        </Col>
        <Col lg={4}>
        <div style={{alignContent: 'center', textAlign:'center', verticalAlign:'center', margin:'auto', }}>
          <div style={{width: 170, alignContent: "center", alignItems: 'center', margin: "auto"}}>
            <p style={{fontSize: 20, fontWeight: 'bold'}}>Active Users</p>
          <CircularProgressbarWithChildren 
            value={counter/active.total*100} 
            // text={`${counter}%`} 
            styles={buildStyles({pathColor: '#4EBDB8', })}
          >
            <div style={{ fontSize: 16, marginTop: -5, flexDirection: "column", verticalAlign:'center', marginTop: 10}}>
              <FontAwesomeIcon icon={faUser} size="2x" color='#4EBDB8'/>
              <p style={{marginTop: 10, color: "#968c83"}}><strong>{counterForm(counter)}</strong></p>
            </div>
          </CircularProgressbarWithChildren>
          </div>
        </div>
        </Col>
        <Col lg={4}>
          <div >
            <MapChart setTooltipContent={setContent}/>
            <ReactToolTip>{content}</ReactToolTip>
          </div>
        </Col>
      </Row>
      <div>
      <ReactFlexyTable 
      data={dataList} 
      sortable 
      globalSearch
      pageSize={10}
      // onPageChange={false}
      />
      </div>
      
    </div>
  )
}