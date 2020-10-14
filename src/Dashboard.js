import React, {Component} from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <h5>Dashboard</h5>
        <Row>
          <Col lg={3}>
            <Pie
              height={200}
              data={activeUsers}
              options={{
                title:{
                  display:true,
                  text:'Ages',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'bottom'
                },
                maintainAspectRatio:false
              }}
            />
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
      </div>
    )
  }
}