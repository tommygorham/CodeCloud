import React, {Component} from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import './TopNav.scss';
const Styles = styled.div`
  .navbar {
    background-color: #D2E1FF;
  
    text-align: center;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 10000;
		cursor: default;
		height: 2em;
		line-height: 2em;
  
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #D2E1FF;
    margin-bottom: 0;
			list-style: none;
            padding-left: 0;
            display: inline-block;
            padding-left: 0;
            -moz-transition: background-color .2s ease-in-out;
			-webkit-transition: background-color .2s ease-in-out;
			-ms-transition: background-color .2s ease-in-out;
			transition: background-color .2s ease-in-out;
			position: relative;
			display: block;
		
			text-decoration: none;
			outline: 0;
			font-weight: 600;
			
			padding: 0 1.25em;
   

    &:hover {
      color: white;
    }
  }
 
  

`;
class TopNav extends Component {
  state = {};
  render() {
    return (
      <div className="use-bootstrap">
        <Styles>
          <Navbar expand="lg">
            <Navbar.Brand href="/">Code Cloud</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </div>
    );
  }
}

export default TopNav;
