import React, {Component, useState} from 'react';
import './App.css';
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

const activeUsers = {
    labels: ['12-18', '19-30','30-60','>60'],
    datasets: [
        {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        ],
        data: [65, 59, 80, 81]
        }
    ]
};
const active={
  active: 47453,
  total: 54000,
};
export default function Dashboard(){
  const [content, setContent] = useState("");
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    counter <active.active && setTimeout(() => setCounter(counter + 234), 50);
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
        <div style={{alignContent: 'center', textAlign:'center', verticalAlign:'center'}}>
          <div style={{width: 170, }}>
            <p style={{fontSize: 20, fontWeight: 'bold'}}>Active Users</p>
          <CircularProgressbarWithChildren 
            value={counter/active.total*100} 
            // text={`${counter}%`} 
            styles={buildStyles({pathColor: `rgba(33,201,159,1)`, })}
          >
            <div style={{ fontSize: 16, marginTop: -5, flexDirection: "column", verticalAlign:'center', marginTop: 10}}>
              <FontAwesomeIcon icon={faUser} size="2x" color={`rgba(33,201,159,1)`}/>
              <p style={{marginTop: 10}}><strong>{counter}</strong></p>
            </div>
          </CircularProgressbarWithChildren>
          </div>
        </div>
        </Col>

        {/* <Col lg={3}>
          <Pie
            data={data}
            options={{
              title:{
                display:true,
                text:'Something',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
              maintainAspectRatio:false
            }}
          />
        </Col>  */}
      </Row>

      <div style={{width:'100%', height:100}}>
        <MapChart setTooltipContent={setContent}/>
        <ReactToolTip>{content}</ReactToolTip>
      </div>
    </div>
  )
}