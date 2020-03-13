import React, { Component } from 'react';
import { TileBody } from './component/tile.js'

class TileFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="main-body">
                <TileBody
                    name="Zachary Dyar"
                    handle="zdyar89"
                    content="hello world hello world hello world"/>
            </div>
        );
    }
}

export default TileFeed;
