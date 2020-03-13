import React from 'react';

const Tile = (props) => {
    return(
        <div className="tile-body">
            {props.children}
        </div>
    )
}

const Image = (props) => {
    return(
        <img src={props.image} alt="Logo" className="picture"/>
    )
}

const Handle = (props) => {
    return(
        <div className="handle">
            {props.handle}
        </div>
    )
}

const Name = (props) => {
    return(
        <div className="name">
            {props.name}
        </div>

    )
}

const Content = (props) => {
    return(
        <div className="content">
            {props.content}
        </div>

    )

}

const TileBody = (props) => {
    return(
        <Tile>
            <div className="inner-body">
                <Image image={props.image}/>
                <div className="body">
                    <div className="inner-body">
                        <Name name={props.name}/>
                        <Handle handle={props.handle}/>
                    </div>
                    <Content content={props.content}/>
                </div>
            </div>
        </Tile>
    )     
}

export { TileBody }; 



