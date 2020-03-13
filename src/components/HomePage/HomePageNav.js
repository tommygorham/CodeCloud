import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

const Header = styled.section`
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  background-color: #fefefe;
  border-bottom: solid 1px rgba(160, 160, 160, 0.3);
  height: 3em;
  left: 0;
  line-height: 3em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;

  a {
    color: inherit;
    text-decoration: none;
    border-bottom: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }
  ul li {
    display: inline-block;
    padding-left: 0;
  }
  h1 {
    font-weight: 800;
    letter-spacing: 0.2em;
    line-height: 1.5;
    margin: 0 0 1em 0;
    height: inherit;

    text-transform: uppercase;
    height: inherit;
    line-height: inherit;
    padding: 0 0 0 0.8em;
    white-space: nowrap;
  }
  h1 a {
    font-size: 0.2em;
    color: inherit;
    border-bottom: 0;
  }

  .links {
    -moz-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    height: inherit;
    line-height: inherit;
    margin-left: 1.5em;
    overflow: hidden;
    padding-left: 1.5em;
  }
  .links ul li {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    line-height: 1;
    margin-left: 1em;
    padding-left: 1em;
  }
  .links ul li:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
  }
  .links ul li a {
    border-bottom: 0;
    font-size: 0.7em;
    font-weight: 400;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
  .main {
    height: inherit;
    line-height: inherit;
    text-align: right;
    form {
      margin: 0;
    }

    form {
      margin: 0 0 2em 0;
    }

    form,
    input {
      display: inline-block;
      height: 2em;
      position: relative;
      top: 3px;
      vertical-align: middle;
    }
    input[type="text"],
    select,
    textarea {
      -moz-appearance: none;
      -webkit-appearance: none;
      -ms-appearance: none;
      appearance: none;
      background: rgba(160, 160, 160, 0.075);
      border: none;
      border: solid 1px rgba(160, 160, 160, 0.3);
      border-radius: 0;
      color: inherit;
      display: block;
      outline: 0;
      padding: 0 0.8em;
      text-decoration: none;
      width: 100%;
    }
  

    form.search:before {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
      text-transform: none !important;
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
    }

    form.search:before {
      color: #aaaaaa;
      content: "\f002";
      display: block;
      height: 2.75em;
      left: 0;
      line-height: 2.75em;
      position: absolute;
      text-align: center;
      top: 0;
      width: 2.5em;
    }

    form.search > input:first-child {
      padding-left: 2.5em;
    }
  }
  .main ul {
    height: inherit;
    line-height: inherit;
  }
  .main ul li {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    height: inherit;
    line-height: inherit;
    white-space: nowrap;
  }
  .main ul li > * {
    display: block;
    float: left;
  }
  .main ul li > a {
    text-decoration: none;
    border-bottom: 0;
    color: #aaaaaa;
    overflow: hidden;
    position: relative;
    text-indent: 4em;
    width: 4em;
  }
  .main ul li > a:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    text-transform: none !important;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .main ul li > a:before {
    display: block;
    height: inherit;
    left: 0;
    line-height: inherit;
    position: absolute;
    text-align: center;
    text-indent: 0;
    top: 0;
    width: inherit;
  }

  #search {
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
  }

  #search input {
    width: 12em;
  }

  #search.visible {
    max-width: 12.5em;
    opacity: 1;
    padding: 0 0.5em 0 0;
  }

.main_nav {
  height: inherit;
  line-height: inherit;
  text-align: right;
form {
    margin: 0;\height
  } 
  .main_nav ul {
    height: inherit;
    line-height: inherit;
  }
  .main_nav ul li {
    border-left: solid 1px rgba(160, 160, 160, 0.3);
    height: inherit;
    line-height: inherit;
    white-space: nowrap;
  }
  .main_nav ul li > * {
    display: block;
    float: left;
  }
  .main_nav ul li > a {
    text-decoration: none;
    border-bottom: 0;
    color: #aaaaaa;
    overflow: hidden;
    position: relative;
    text-indent: 4em;
    width: 4em;
  }
  
  .main_nav ul li > a:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    text-transform: none !important;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
  }
  .main_nav ul li > a:before {
    display: block;
    height: inherit;
    left: 0;
    line-height: inherit;
    position: absolute;
    text-align: center;
    text-indent: 0;
    top: 0;
    width: inherit;
  }

  #search {
    -moz-transition: all 0.5s ease;
    -webkit-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
  }

  #search input {
    width: 12em;
  }

  #search.visible {
    max-width: 12.5em;
    opacity: 1;
    padding: 0 .5em 0 0;
  }



  `;

class HomePageNav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header>
          <h1>
            <a className="icon solid major fa-cloud" href="/home"></a>
          </h1>
          <nav className="links">
            <ul>
              <li>
                <a href="/home">Profile</a>
              </li>
              <li>
                <a href="/home">Portfolio</a>
              </li>
              <li>
                <a href="/home">Connect</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com">Github</a>
              </li>
              <li>
                <a
                  href="/"
                  onClick={() => {
                    this.signOut();
                  }}
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </nav>
        </Header>
      </React.Fragment>
    );
  }
}

export default HomePageNav;
