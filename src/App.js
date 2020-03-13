import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginPage/LoginPage";
import Home from "./components/HomePage/HomePage";

class App extends Component {
  state = {
    token: null,
    loggedIn: false,
    user: null
  };

  login = status => {
    this.setState({ loggedIn: status });
  };

  setToken = newValue => {
    this.setState({ token: newValue });
  };

  setUser = newValue => {
    this.setState({ user: newValue });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login
                login={this.login}
                loggedIn={this.state.loggedIn}
                setToken={this.setToken}
                setUser={this.setUser}
              />
            </Route>
            <Route exact path="/home">
              <Home
                login={this.login}
                loggedIn={this.state.loggedIn}
                token={this.state.token}
              />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
