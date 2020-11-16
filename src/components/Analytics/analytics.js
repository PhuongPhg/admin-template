import { red } from '@material-ui/core/colors';
import React, {Component, useState} from 'react';
import '../../backgroundColor.css';
import './analytics.css';
import CallIcon from '@material-ui/icons/Call';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export default function Analytics() {
    return (
    <div className="backgroundInner">
        <div style={{display: 'flex', }}>
            <div style={{flex: 1, flexDirection: 'column'}}>
                <div className="innerBox" style={{marginBottom: 20, flex: 1}}>
                    <h4>Active User</h4>
                    <p className= "graText" >300.000/400.000</p>
                </div>
                <div className="innerBox" style={{marginBottom: 20, flex: 1}}>
                    <h4>Active User</h4>
                    <p className= "graText" >300.000/400.000</p>
                </div>
                <div className="innerBox" style={{marginBottom: 20, flex: 1}}>
                    <h4>Active User</h4>
                    <p className= "graText" >300.000/400.000</p>
                </div>
                <div className="innerBox" style={{marginBottom: 20, flex: 1}}>
                    <h4>Active User</h4>
                    <p className= "graText" >300.000/400.000</p>
                </div>
                <div className="innerBox" style={{marginBottom: 20, flex: 1}}>
                    <h4>Active User</h4>
                    <p className= "graText" >300.000/400.000</p>
                </div>
            </div>
            <div style={{flex: 2,display: 'flex', marginLeft: 20, flexDirection: 'column'}}>
                <div style={{flex: 1, display: 'flex', textAlign: 'center', }}>
                    <div className="rowFour" >
                        <PeopleAltIcon style={{ fontSize: 90, marginTop: 60 }}/>
                        <h4 style={{paddingTop: 15}}>User Analytics</h4>
                    </div>
                    <div className="rowFour" >
                        <CallIcon style={{ fontSize: 90, marginTop: 60 }}/>
                        <h4 style={{paddingTop: 15}}>User Analytics</h4>
                    </div>
                </div>
                <div style={{flex: 1, display: 'flex', textAlign: 'center', }}>
                    <div className="rowFour" >
                        <PeopleAltIcon style={{ fontSize: 90, marginTop: 60 }}/>
                        <h4 style={{paddingTop: 15}}>User Analytics</h4>
                    </div>
                    <div className="rowFour" >
                        <PeopleAltIcon style={{ fontSize: 90, marginTop: 60 }}/>
                        <h4 style={{paddingTop: 15}}>User Analytics</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}