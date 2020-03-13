import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withFirebase } from "../../api";
import GithubRequestHandler from "../../classes/GithubRequestHandler";
import FirestoreHandler from "../../classes/FirestoreHandler";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import HomeWrapper from "./HomeWrapper";
import HomePageNav from "./HomePageNav";
import UserSection from "./UserSection";
import Timeline from "./Timeline.js";
import ContentCreator from "./ContentCreator.js";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.githubHandler = new GithubRequestHandler(this.props.token);
    this.state = {
      users: [],
      posts: []
    };
    this.firestoreHandler = new FirestoreHandler(this.props.firebase.db);
    this.initializePosts();
  }

  getEmailPost() {
    this.githubHandler.getUserEmails(data => {
      const postContent = "Hi everyone! My email is: " + data.content;
      this.setState({
        users: [
          {
            name: data.name,
            image: data.avatarURL,
            content: postContent,
            login: data.login
          },
          ...this.state.users
        ]
      });
    });
  }

  getLastCommitPost() {
    this.githubHandler.getFirstCommitLastRepository(data => {
      const postContent =
        "Recently I made a commit to " +
        data.content.repoName +
        ", the details: " +
        data.content.message;
      this.setState({
        posts: [
          {
            name: data.name,
            image: data.avatarURL,
            content: postContent,
            login: data.login
          },
          ...this.state.users
        ]
      });
    });
  }

  initializePosts() {
    this.firestoreHandler.getPosts(posts => {
      this.setState({ posts: posts });
    });
  }

  signOut() {
    this.props.firebase.signOut();
    this.props.login(false);
  }
  handleFormSubmission(query) {
    this.githubHandler.getRepositoryFromCustomGraphQLQuery(query, data => {
      const postContent =
        "Recently I made a commit to " +
        data.content.repoName +
        ", the details: " +
        data.content.message;
      const post = {
        name: data.name,
        image: data.avatarURL,
        content: postContent,
        login: data.login
      };
      console.log("handleFormSub " + JSON.stringify(post));
      this.firestoreHandler.savePost(post);
      this.setState({
        posts: [post, ...this.state.posts]
      });
    });
  }

  render() {
    console.log(this.props.posts);

    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <HomePageNav />

        <UserSection />

        <ContentCreator
          submit={query => {
            this.handleFormSubmission(query);
          }}
        />
        <Timeline posts={this.state.posts} />
      </React.Fragment>
    );
  }
}

const Home = withFirebase(HomePage);
export default Home;
