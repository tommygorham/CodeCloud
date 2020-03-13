import React, { Component } from "react";
import { get } from "http";
import GlobalStyle from "./GlobalStyle";
import HomeWrapper from "./HomeWrapper";

const ContentCreator = props => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <HomeWrapper>
        <textarea rows="6" defaultValue="Custom GraphQL here...."></textarea>
        <button
          onClick={() => {
            const input = document.getElementById("customGraphQLTextArea")
              .value;
            props.submit(input);
            console.log(input);
          }}
        >
          Submit
        </button>
      </HomeWrapper>
    </React.Fragment>
  );
};

export default ContentCreator;
