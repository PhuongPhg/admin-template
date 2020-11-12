import React, {Component} from 'react';
import './AppNew.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown ,Image } from 'react-bootstrap';
import { reveal as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, } from '@fortawesome/free-regular-svg-icons';
import { faCog, faBell} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard.js';
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
function item2(){
  return <p>item2</p>
}

function item3(){
  return <p>item3</p>
}

function item4(){
  return <p>item4</p>
}

const user = {
  username: 'Phuong Trinh',
  avatar: require("./3.jpg"),
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