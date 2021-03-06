import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown ,Image } from 'react-bootstrap';
import { reveal as Menu } from 'react-burger-menu';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, } from '@fortawesome/free-regular-svg-icons';
import { faCog, faBell} from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard.js';

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
        <div className="App">
          <div id="sidebar">
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
        
      
          <div className="content" >
            <div className="style-navbar">
            <Navbar.Brand className="justify-content-end" href="#">
              <img src={require("./HDLogo.png")} width="100" crop="scale"
                className="d-inline-block align-top"/>
              </Navbar.Brand>
              <Navbar className="ml-auto" style={{float: 'right'}}>
                {/* <Nav.Link> */}
                  <div class="icon-wrapper-bg" style={{backgroundColor: '#b0cac7'}}>
                    <FontAwesomeIcon icon={faCog} size="lg" color='#36504d'className="icon-spin"/>
                  </div>
                  <div class="icon-wrapper-bg" style={{backgroundColor: '#f5a386'}} >
                    <FontAwesomeIcon icon={faBell}  className="iconNav" size="lg" color="#bb3b0e" className="bell-rang"/>
                  </div>
                {/* </Nav.Link> */}
                <Image src={user.avatar} roundedCircle style={styles.avatar}/>
                <Navbar.Text style={{padding:0,textAlign:"left"}}>
                  <h6 style={styles.username}>{user.username}</h6>
                  <div style={styles.status}>Active</div>
                </Navbar.Text>
              </Navbar>
            </div>
            <Navbar variant="light" 
            // style={{marginTop: '-1.7em', marginRight: '-4em',}}
            >
              
              {/* <div id="header-nav">
                <Nav className="mr-auto">
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
              </div> */}
              
              {/* <Navbar className="ml-auto">
                  <div class="icon-wrapper-bg" style={{backgroundColor: '#b0cac7'}}>
                    <FontAwesomeIcon icon={faCog} size="lg" color='#36504d'className="icon-spin"/>
                  </div>
                  <div class="icon-wrapper-bg" style={{backgroundColor: '#f5a386'}} >
                    <FontAwesomeIcon icon={faBell}  className="iconNav" size="lg" color="#bb3b0e" className="bell-rang"/>
                  </div>
                <Image src={user.avatar} roundedCircle style={styles.avatar}/>
                <Navbar.Text style={{padding:0,textAlign:"left"}}>
                  <h6 style={styles.username}>{user.username}</h6>
                  <div style={styles.status}>Active</div>
                </Navbar.Text>
              </Navbar> */}
            </Navbar>
              
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
      </Router>
    );
  }
}

function Analytics(){
  return <h1>Analytics Screen</h1>
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