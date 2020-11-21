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
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import RoomIcon from '@material-ui/icons/Room';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Tooltip from "@material-ui/core/Tooltip";
import Analytics from './Analytics/analytics';
import PersonIcon from '@material-ui/icons/Person';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import userAnalytics from './Analytics/userAnalytics.js';
import loanAnalytics from './Analytics/loanAnalytics';

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 140px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 15px;
  color: white;
  MaterialIcon{
    &:hover{
      color: black;
    }
  };
  .smaller-Analytics{
    display: 'flex';
    flex-direction: 'column';
  };
  .visibleDiv{
    transition: visibility 0s, opacity 0.5s ease-in;
  }
`;

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
          hover: false, 
          key: '', 
          showSmallerIcon: false,
          smallerKey: '',
          open: false,
        };
    }
    render() {
    return (
      <div style={{marginTop: 15}}>
        <StyledSideNav onMouseLeave={() =>{ this.setState({showSmallerIcon: false})}} >
            <div style={{display: 'flex', flexDirection: "column"}}>
                <div style={{padding: 10, textAlign: 'center', marginBottom: 10}}>
                    <Link to='/'>
                      <Tooltip title={<div style={{fontSize: 13}}>Dashboard</div>}>
                        <IconButton aria-label="dashboard">
                          <DashboardIcon 
                            onMouseOver={() => this.setState({hover: true, key: 'dash', showSmallerIcon: false})}
                            onMouseOut={() =>  this.setState({hover: false, key: ''})}
                            style={(this.state.hover && this.state.key=='dash') ? {color: 'white', fontSize: 55} : {color: 'rgba(255,255,255,0.7)', fontSize: 55}}/>
                        </IconButton>
                      </Tooltip>
                    </Link>
                </div>
                <div style={{padding: 10, textAlign: "center"}}>
                    <Link to='/analytics'>
                      <Tooltip title={<div style={{fontSize: 13}}>Analytics</div>}>
                        <IconButton aria-label="analytics">
                          <BarChartIcon
                            onMouseOver={() => this.setState({hover: true, key: 'analytics', showSmallerIcon: true, smallerKey: ''})}
                            onMouseOut={() => this.setState({hover: false, key:'',})}
                            style={(this.state.hover && this.state.key=='analytics') ? {color: 'white', fontSize: 55} : {color: 'rgba(255,255,255,0.7)', fontSize: 55}}/>
                        </IconButton>
                      </Tooltip>   
                    </Link>
                </div>
                { this.state.showSmallerIcon ? 
                  (
                    <div className="visibleDiv">
                  <div style={{padding: 10, textAlign: "center", }}
                  onMouseEnter={() => this.setState({showSmallerIcon: true})}
                  onMouseLeave={() => this.setState({showSmallerIcon: false})}
                  >
                    <Link to="/userAnalytics">
                    <Tooltip title={<div style={{fontSize: 13}}>User Analytics</div>}>
                    <IconButton aria-label="analytics">
                    <PeopleAltIcon  style={{flex: 1, fontSize: 30}}
                      onMouseOver={() => this.setState({hover: true, key: '', smallerKey: 'user'})}
                      onMouseOut={() => this.setState({hover: false, key:'', smallerKey: ''})}
                      style={(this.state.hover  && this.state.smallerKey=='user') ? {color: 'white', fontSize: 30} : {color: 'rgba(255,255,255,0.7)', fontSize: 30}}/>
                      </IconButton>
                    </Tooltip>
                    </Link>
                  </div>
                  <div style={{padding: 10, textAlign: "center", }}
                  onMouseEnter={() => this.setState({showSmallerIcon: true})}
                  onMouseLeave={() => this.setState({showSmallerIcon: false})}
                  >
                    <Link to="/loanAnalytics">
                    <Tooltip title={<div style={{fontSize: 13}}>Loan Analytics</div>}>
                    <IconButton aria-label="analytics">
                    <AccountBalanceIcon  style={{flex: 1, fontSize: 30}}
                      onMouseOver={() => this.setState({hover: true, key: '', smallerKey: 'loan'})}
                      onMouseOut={() => this.setState({hover: false, key:'', smallerKey: ''})}
                      style={(this.state.hover  && this.state.smallerKey=='loan') ? {color: 'white', fontSize: 30} : {color: 'rgba(255,255,255,0.7)', fontSize: 30}}/>
                      </IconButton>
                    </Tooltip>
                    </Link>
                  </div>
                  <div style={{padding: 10, textAlign: "center", }}
                  onMouseEnter={() => this.setState({showSmallerIcon: true})}
                  onMouseLeave={() => this.setState({showSmallerIcon: false})}
                  >
                    <Tooltip title={<div style={{fontSize: 13}}>Recharge Analytics</div>}>
                    <IconButton aria-label="analytics">
                    <LocalAtmIcon  style={{flex: 1, fontSize: 30}}
                      onMouseOver={() => this.setState({hover: true, key: '', smallerKey: 'recharge'})}
                      onMouseOut={() => this.setState({hover: false, key:'', smallerKey: ''})}
                      style={(this.state.hover  && this.state.smallerKey=='recharge') ? {color: 'white', fontSize: 30} : {color: 'rgba(255,255,255,0.7)', fontSize: 30}}/>
                      </IconButton>
                    </Tooltip>
                  </div>
                  <div style={{padding: 10, textAlign: "center", }}
                  onMouseEnter={() => this.setState({showSmallerIcon: true})}
                  onMouseLeave={() => this.setState({showSmallerIcon: false})}
                  >
                    <Tooltip title={<div style={{fontSize: 13}}>Region Analytics</div>}>
                    <IconButton aria-label="analytics">
                    <RoomIcon  style={{flex: 1, fontSize: 30}}
                      onMouseOver={() => this.setState({hover: true, key: '', smallerKey: 'region'})}
                      onMouseOut={() => this.setState({hover: false, key:'', smallerKey: ''})}
                      style={(this.state.hover  && this.state.smallerKey=='region') ? {color: 'white', fontSize: 30} : {color: 'rgba(255,255,255,0.7)', fontSize: 30}}/>
                      </IconButton>
                    </Tooltip>
                  </div>
                  </div>
                  ) 
                  : (null)
                }
                <div style={{padding: 10, textAlign: "center"}}>
                    <Link to='/analytics'>
                      <Tooltip title={<div style={{fontSize: 13}}>Profile</div>}>
                        <IconButton aria-label="analytics">
                          <PersonIcon
                            onMouseOver={() => this.setState({hover: true, key: 'profile', showSmallerIcon: true, smallerKey: ''})}
                            onMouseOut={() => this.setState({hover: false, key:'',})}
                            style={(this.state.hover && this.state.key=='profile') ? {color: 'white', fontSize: 55} : {color: 'rgba(255,255,255,0.7)', fontSize: 55}}/>
                        </IconButton>
                      </Tooltip>   
                    </Link>
                </div>
            </div>
        </StyledSideNav>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/userAnalytics" component={userAnalytics} />
        <Route path="/loanAnalytics" component={loanAnalytics} />
      </Switch>
      </div>
    );
  }
}
function item2(){
    return <p>item22222222</p>
  }