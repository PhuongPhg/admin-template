import React, {Component} from 'react';
import './App.css';
import { Button, Row, Col, Container,Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { reveal as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faBell} from '@fortawesome/free-regular-svg-icons'


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
      <div className="App" style={{flexDirection:'column'}}>
        <div className="sidebar">
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
        </div>

        <div className="other" style={{marginLeft: '5em', }}> 
        <div className="w-100">
        <Navbar variant="light" style={{marginTop: '-0.5em'}}>
          <Navbar.Brand href="#">
            <img src={require("./HDLogo.png")} width="100" crop="scale"
              className="d-inline-block align-top"/>
          </Navbar.Brand>
          <div id="header-nav">
            <Nav className="mr-auto" style={{float:'left'}}>
              <Nav.Link >&nbsp;</Nav.Link>
              <NavDropdown title="Home" className="nav-item">
                <NavDropdown.Item href ="#"> dunno1</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Setting" className="nav-item">
                <NavDropdown.Item href ="#"> dunno2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Projects" className="nav-item">
                <NavDropdown.Item href ="#"> dunno3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav-item">
                <FontAwesomeIcon icon={faComments}/>
                <span>Contact</span>
              </Nav.Link>
            </Nav>
          </div>
          
          <Navbar className="ml-auto" style={{marginRight: '4em'}}>
            <Nav.Link>
              <div class="icon-wrapper-bg bg-danger">
              <FontAwesomeIcon icon={faBell}  className="iconNav " size="4x" />
              </div>
            </Nav.Link>
            <Image src={require("./3.jpg")} roundedCircle className="small-avatar"/>
            <Navbar.Text style={{padding:0,textAlign:"left"}}>
              <h6 style={{marginBottom:0}}>Phuong Trinh</h6>
              <div>Active</div>
            </Navbar.Text>
          </Navbar>
        </Navbar>
        </div>

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
      </div>
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