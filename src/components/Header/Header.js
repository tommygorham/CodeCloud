import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Button
        onClick={() => {
          this.handler.getUserEmails(json => {
            console.log(json);
          });
        }}
      >
        Get your emails!
      </Button>
    </Navbar>
  );
};

const Header = withFirebase(Head);
export default Header;
