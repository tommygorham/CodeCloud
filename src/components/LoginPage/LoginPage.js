import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withFirebase } from "../../api";
import MovingClouds from "../MovingClouds/MovingClouds";

class LoginPage extends Component {
  
  signIn() {
    this.props.firebase.signIn(result => {
      this.props.setToken(result.credential.accessToken);
      this.props.setUser(result.user);
      this.props.login(true);
    });
  }
 

  render() {
   
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      return <Redirect to="/home" />;
    } else {
      return (
        <React.Fragment>
          <section id="header">
            <MovingClouds />
            <div className="inner">
              <span className="icon solid major fa-cloud"></span>

              <h1>
                welcome to <strong>codecloud</strong>, a creative <br />
                solution for independent programmers. <br />{" "}
                <a
                  href="#"
                  onClick={() => {
                    this.signIn();
                  }}
                >
                  login with github
                </a>
              </h1>

              <p>click discover to learn more</p>
              <ul class="actions special">
                <li>
                  <a href="#one" class="button scrolly">
                    Discover
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section id="one" class="main style1">
            <div className="container">
              <div className="row gtr-150">
                <div className="col-6 col-12-medium">
                  <header className="major">
                    <h2>
                      Specifically Designed <br />
                      to be Intuitive
                    </h2>
                  </header>
                  <p>
                    The codecloud platform enables software engineers, students,
                    and computer science enthusiasts to present their portfolio
                    and connect with other professionals.
                  </p>
                  <p>
                    All you need to use our app is a Github account! Using Google Firebase, we verify your login authentication through Github's API, 
                    thus enabling you to quickly create your account with a single click. Login with Github and get started connecting with other coders!  

                  </p>
                </div>
                <div className="col-6 col-12-medium imp-medium">
                  <span className="image fit">
                    <img src="images/code-cloud.jpg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="two" class="main style2">
            <div class="container">
              <div class="row gtr-150">
                <div class="col-6 col-12-medium">
                  <ul class="major-icons">
                    <li>
                      <span class="icon solid style3 major fa-bolt"></span>
                    </li>
                    <li>
                      <span class="icon solid style2 major fa-laptop-code"></span>
                    </li>
                    <li>
                      <span class="icon solid style1 major fa-lock"></span>
                    </li>

                    <li>
                      <span class="icon solid style1 major fa-graduation-cap"></span>
                    </li>
                  </ul>
                </div>
                <div class="col-6 col-12-medium">
                  <header class="major">
                    <h2>
                      The Future of Networking, hosted on the cloud
                      <br />
                    </h2>
                  </header>
                  <p>
                    Fast and performant web application developed using React
                  </p>
                  <p>
                    Powerful platform to connect with engineers and developers
                  </p>
                  <p>High Security with Open Authorization and Google Firebase</p>
                  <p>Essential tool for both students and professionals</p>
                </div>
              </div>
            </div>
          </section>

          <section id="three" class="main style1 special">
            <div class="container">
              <header class="major">
                <h2>Meet The Developers</h2>
              </header>

              <div class="row gtr-150">
                <div class="col-3 col-12-medium">
                  <span class="image fit">
                    <img src="images/andrew.png" alt="" />
                  </span>
                  <h3>Andrew Watson</h3>
                  <p>Description of Andrew</p>
                  <ul class="actions special">
                    <li>
                      <a href="#" class="button">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-12-medium">
                  <span class="image fit">
                    <img src="images/jared.jpg" alt="" />
                  </span>
                  <h3>Jared Taylor</h3>
                  <p>Description of Jared </p>
                  <ul class="actions special">
                    <li>
                      <a href="#" class="button">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-12-medium">
                  <span class="image fit">
                    <img src="images/tommy.jpg" alt="image" />
                  </span>
                  <h3>Tommy Gorham</h3>
                  <p>Tommy is a 22 year old senior at the University of Tennessee at Chattanooga. He graduates in May with a B.S. in Computer Science, Software Systems and a minor in Business Administration.</p>
                  <ul class="actions special">
                    <li>
                      <a href="https://www.linkedin.com/in/tommy-gorham-4498a3178/" class="button">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-12-medium">
                  <span class="image fit">
                    <img src="images/zach.jpg" alt="" />
                  </span>
                  <h3>Zach Dyar</h3>
                  <p>Description of Zach</p>
                  <ul class="actions special">
                    <li>
                      <a href="#" class="button">
                        More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    }
  }
}

const Login = withFirebase(LoginPage);
export default Login;
