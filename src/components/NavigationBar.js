import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { 
    background-color: 'transparent'; 
    // position: 'fixed'
  }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white}
  }
  // .navbar-brand {
  //   font-size: 1.4em;
  //   color: white;
  //   &:hover { font-weight: 'bold' };
  // }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = ({name}) => (
  <Styles style={{position: 'sticky'}}>
    <Navbar expand="lg" style={{paddingTop: 10}} >
      {/* <Navbar.Brand href="/">   
        <img src={require("../assets/HDLogo.png")} width="150" crop="scale"
              className="d-inline-block align-top"/>
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto cl-effect-1">
          {/* <Nav.Item><Nav.Link href="/about" >Setting</Nav.Link></Nav.Item> */}
          <div style={{flexDirection: 'row', }}>
            <img src={user.avatar} width="50" crop="scale" style={{borderRadius: 25}}
              className="d-inline-block align-top"/>
              <Navbar.Text style={{padding:0,textAlign:"left", color: 'white', marginLeft: 10}}>
              {/* <h6 style={{marginBottom:0}}>{user.username}</h6> */}
              <h6 style={{marginBottom:0}}>{name}</h6>
              <div>{user.status}</div>
              </Navbar.Text>  
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
const user = {
  username: 'Phuong Trinh',
  avatar: require("../assets/3.jpg"),
  status: 'Active'
}
