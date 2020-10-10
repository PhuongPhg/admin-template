import React, {Component} from 'react';
import './App.css';
import { Pie } from 'react-chartjs-2';
import { Row, Col, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const activeUsers = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
        {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#d9e4dd',
        ],
        hoverBackgroundColor: [
          '#501800',
          '#cdc9c3'
        ],
        data: [65, 35]
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
                // title:{
                //   display:true,
                //   text:'Something',
                //   fontSize:20
                // },
                legend:{
                  display:true,
                  position:'right'
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