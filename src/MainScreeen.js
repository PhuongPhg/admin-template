import React, {Component} from 'react';
import './AppNew.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown ,Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard.js';
import { NavigationBar } from './components/NavigationBar';
import Sidebar from './components/Sidebar';

export default class MainScreen extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <div className="backgroundColor">
            <NavigationBar />
            <Sidebar />
          </div>
        </Router>
      </React.Fragment>
    )
  }
}
const user = {
  username: 'Phuong Trinh',
  avatar: require("./assets/3.jpg"),
  status: 'Active'
}

const styles = {
  label:{
    color:'#e0f3ff',
    textTransform:'uppercase',
    fontSize: 18,
    fontWeight: '700',
    marginLeft:30,
  },
  avatar:{
    height: '2.7rem',
  },
  username:{
    marginBottom:0,
    marginLeft:10,
  },
  status:{
    fontSize:15,
    marginLeft:10
  }
}