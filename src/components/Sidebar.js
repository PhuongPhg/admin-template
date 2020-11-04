import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import Dashboard from '../Dashboard.js';
// import { Link } from 'react-router'

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 140px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
//   background-color: green;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 15px;
  color: white;
  
`;

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = { hover: false };
    }
    render() {
    return (
        <div style={{marginTop: 15}}>
        <StyledSideNav>
            <div style={{display: 'flex', flexDirection: "column"}}>
                <div style={{padding: 10, textAlign: 'center', marginBottom: 10}}>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faHome} size="3x" color=" rgba(255,255,255,0.7)" 
                        onMouseOver={() => this.setState({hover: true})}
                        onMouseLeave={() =>  this.setState({hover: false})}
                        style={this.state.hover ? { color: "white" } : {}}
                        />
                    </Link>
                </div>
                <div style={{padding: 10, textAlign: "center"}}>
                    <Link to='/about'>
                        <FontAwesomeIcon icon={faUser} size="3x" color=" rgba(255,255,255,0.7)" 
                        onMouseOver={() => this.setState({hover: true})}
                        onMouseLeave={() =>  this.setState({hover: false})}
                        style={this.state.hover ? { color: "white" } : {}}
                        />
                    </Link>
                </div>
            </div>
        </StyledSideNav>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/about" component={item2} />
      </Switch>
      </div>
    );
  }
}
function item2(){
    return <p>item22222222</p>
  }