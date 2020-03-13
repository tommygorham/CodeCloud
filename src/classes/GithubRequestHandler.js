import Dispatcher from './Dispatcher';

const request = require("request");

class GithubRequestHandler {
    constructor(token) {
        this.token = token;
        this.getUser();
        this.dispatcher = new Dispatcher();
        this.root = "https://api.github.com/graphql";
    }

    getUser() {
        request.get({ url: `https://api.github.com/user?access_token=${this.token}` },
            (error, response, body) => {
                if (!error) {
                    const userFull = JSON.parse(body);
                    console.log("user full: " + body)
                    this.user = { login: userFull.login, avatarURL: userFull.avatar_url, name: userFull.name }
                    this.post = this.user;
                }
            });
    }

    makeRequest(queryBody, receiver, callback) {
        var headers = { 'authorization': `bearer ${this.token}` };
        request.post({ headers: headers, url: this.root, body: JSON.stringify(queryBody) },
            (error, response, body) => {
                if (!error) {
                    console.log(body)
                    const obj = JSON.parse(body).data.viewer;
                    receiver(obj, callback);
                }
                else {
                    console.log(error);
                }
            });
    }

    getUserEmails(callback) {
        const query = { 'query': `query { viewer { email } }` };
        const receiveResponseBody = (obj, callback) => {
            this.post.content = obj.email;
            this.dispatcher.dispatch(callback, this.post);
        }
        this.makeRequest(query, receiveResponseBody, callback);
    }

    getFirstCommitLastRepository(callback) {
        const query = {
            'query': `query {
                viewer {
                  repositories(last: 1) {
                    nodes {
                      name
                      defaultBranchRef {
                        target {
                          ... on Commit {
                            history(first: 1) {
                              edges {
                                node {
                                  ... on Commit {
                                    committedDate,
                                      committer{
                                      name
                                    },
                                      message,
                                  }}}}}}}}}}}`
        }
        const receiveResponseBody = (obj, callback) => {
            this.post.content = this.cleanUpRepositoryResponse(obj);
            this.dispatcher.dispatch(callback, this.post);
        }

        this.makeRequest(query, receiveResponseBody, callback);
    }

    getRepositoryFromCustomGraphQLQuery(query, callback){

        const queryObj = {'query': query}

        const receiveResponseBody = (obj, callback) => {
            this.post.content = this.cleanUpRepositoryResponse(obj);
            this.dispatcher.dispatch(callback, this.post);
        }

        this.makeRequest(queryObj, receiveResponseBody, callback);
    }

    getDummyTile(callback) {
        this.post.content = "This is a dummy tile!";
        this.dispatcher.dispatch(callback, this.post);
    }

    cleanUpRepositoryResponse(obj){
        const repoName = obj.repositories.nodes[0].name
        const date = obj.repositories.nodes[0].defaultBranchRef
                        .target.history.edges[0].node.committedDate;
        const message = obj.repositories.nodes[0].defaultBranchRef
                        .target.history.edges[0].node.message;
        return { repoName: repoName, date: date, message: message }
    }
}

export default GithubRequestHandler;
