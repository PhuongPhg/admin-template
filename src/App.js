import React, {Component} from 'react';
import './App.css';

import { Button, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { reveal as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  handleStateChange(state){
    this.setState({menuOpen: state.isOpen})
  }
  toggleMenu(menuState){
    this.setState({menuOpen: menuState})
  }

  render(){
    return (
      <Router>
        <div
          className="sidebar"
          style={{display: this.state.menuOpen ? 'none' : 'block'}}>
        </div>
        
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Navbar.Text style={styles.label}>Menu</Navbar.Text>
          <NavLink to="/dashboard" onClick={() => this.toggleMenu(false)} className="link" activeClassName="activeLink">
            Dashboard
          </NavLink>
          <NavLink to="/analytics" onClick={() => this.toggleMenu(false)} className="link" activeClassName="activeLink">
            Analytics
          </NavLink> 

          <Navbar.Text style={styles.label}>Charts</Navbar.Text>
        </Menu>

        <div className="content">
          <Switch>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
            <Route path="/analytics">
              <Analytics/>
            </Route>
            <Route path="/">
              <Dashboard/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Dashboard(){
  return <h1>Dashboard Screen</h1>
}

function Analytics(){
  return <h1>Analytics Screen</h1>
}

const styles = {
  label:{
    color:'#e0f3ff',
    textTransform:'uppercase',
    fontSize: 18,
    fontWeight: '700',
    marginLeft:30,
  }
}