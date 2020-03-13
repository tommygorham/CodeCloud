import React from 'react';
import Component from 'react';
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-js-pull-to-refresh";
import { TileBody } from './tile.js';
import { withFirebase } from '../../api/index.js';

class Timeline extends Component {
    constructor(props) {
        super(props)
        this.state={
            users:
            [
            ]
        }
    }
    //this.handleRefresh = this.handleRefresh.bind(this)
    //this.getUser = this.getUser.bind(this)

    handleRefresh() {
        return new Promise((resolve) => {
            this.getUser()
        });
    }

    componentWillMount() {
        this.getUser()
    }

    getUser = () => {
        fetch('https://randomuser.me/api/')
        .then(response => {
            if(response.ok) return response.json();
            throw new Error('Request failed');
        })
        .then(data => {
            this.setState({
                users:[
                    {
                        name: data.results[0].name,
                        image: data.results[0].picture.medium,
                        content: data.results
                    },
                    ...this.state.users,
                ]
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render(){
        return(
            <PullToRefresh
            pullDownContent={<PullDownContent />}
            releaseContent={<ReleaseContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={2}
            onRefresh={this.handleRefresh}
            triggerHeight={50}
            backgroundColor='black'>
            <div className="main-body">
              {[...this.state.users].map((user, index) => {
                let name = `${user.name.first} ${user.name.last}`
                let handle = `@${user.name.first}${user.name.last}`
                let image = user.image
                let tweet = user.tweet
                console.log(image)
                return(
                  <TileBody 
                    key={index}
                    name={name}
                    handle={handle}
                    tweet={tweet}
                    image={image} />
                )
              })}      
            </div>
            </PullToRefresh>  
        );
    }

}

export default Timeline;