import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import HomeWrapper from "./HomeWrapper";
import profileImg from "./tommy.jpg";
const ProfileImg = styled.div`
  border-bottom: 0;
  display: inline-block;
  margin: 0 0 1em 0;
  overflow: hidden;
  position: relative;
  width: 4em;
`;

class UserSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <HomeWrapper />
        <section id="main">
          <section id="intro_home">
            <header>
              <h2>Dashboard</h2>
              <p>
                " The present is theirs; the future, for which I really worked,
                is mine. " - Nikola Tesla
              </p>

              <a
                class="button"
                onClick={() => {
                  this.handler.getFirstCommitLastRepository(json => {
                    console.log(json);
                  });
                }}
              >
                Get all of your events!
              </a>
            </header>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default UserSection;
