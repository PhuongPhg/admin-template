import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import Dashboard from '../Dashboard.js';
// import MaterialIcon, {colorPalette} from 'material-icons-react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

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
  MaterialIcon{
    &:hover{
      color: black;
    }
  }
`;

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = { hover: false, key: '' };
    }
    render() {
    return (
        <div style={{marginTop: 15}}>
        <StyledSideNav>
            <div style={{display: 'flex', flexDirection: "column"}}>
                <div style={{padding: 10, textAlign: 'center', marginBottom: 10}}>
                    <Link to='/'>
                      <Tooltip title={<div style={{fontSize: 13}}>Dashboard</div>}>
                        <IconButton aria-label="dashboard">
                          <DashboardIcon 
                            onMouseOver={() => this.setState({hover: true, key: 'dash'})}
                            onMouseOut={() =>  this.setState({hover: false, key: ''})}
                            style={(this.state.hover && this.state.key=='dash') ? {color: '#237c56', fontSize: 55} : {color: 'rgba(255,255,255,0.7)', fontSize: 55}}/>
                        </IconButton>
                      </Tooltip>
                    </Link>
                </div>
                <div style={{padding: 10, textAlign: "center"}}>
                    <Link to='/about'>
                      <Tooltip title={<div style={{fontSize: 13}}>Analytics</div>}>
                        <IconButton aria-label="dashboard">
                          <BarChartIcon
                            onMouseOver={() => this.setState({hover: true, key: 'analytics'})}
                            onMouseOut={() =>  this.setState({hover: false, key:''})}
                            style={(this.state.hover && this.state.key=='analytics') ? {color: '#237c56', fontSize: 55} : {color: 'rgba(255,255,255,0.7)', fontSize: 55}}/>
                        </IconButton>
                      </Tooltip>   
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