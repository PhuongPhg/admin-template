import React, {Component} from 'react';
import './App.css';
import { Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    toggle: false
  }
  Toggle = () => {
    this.setState({toggle:!this.state.toggle})
  }
  render(){
    return (
      <Container fluid>
  <Row>
    <Col>1 of 1</Col>
    <Col>1 of 1</Col>
  </Row>
</Container>
    );
  }
}