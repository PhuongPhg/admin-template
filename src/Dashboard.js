import React, {Component} from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = {
    labels: ['January', 'February', 'March',
           'April', 'May'],
    datasets: [
        {
        label: 'Rainfall',
        backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
        }
    ]
};

export default class Dashboard extends Component{
  render(){
    return(
      <div>
        <h1>Dashboard Screen</h1>
        <Row>
          <Col lg={3}>
            <Pie
              height={200}
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
          </Col>

          <Col lg={3}>
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
          </Col> 
        </Row>
      </div>
    )
  }
}