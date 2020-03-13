import React, { Component } from "react";
import "./Timeline.css";
import GlobalStyle from "./GlobalStyle";
import HomeWrapper from "./HomeWrapper";
import Tile from "./Tile.js"
const Timeline = (props) =>{
  
    const tiles = props.posts.map((post, index)=>{
      return(
        <Tile post={post} key={index}/>
      );
    })
    return (
      <React.Fragment>
        <GlobalStyle />
        <HomeWrapper>
        <div id="main">
           {tiles}
          </div>
        </HomeWrapper>
      </React.Fragment>
    );
  
}

export default Timeline;
