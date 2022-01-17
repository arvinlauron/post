import React from 'react';
import LikeButton from './LikeButton'

export default class Post extends React.Component {

    
    render() {
        return (
                <div className='post'>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.content}</p>
                    <p>Number of Likes</p>
                    <LikeButton likes={this.props.likes}/>
                </div>
              
                
        )
    }
    
}

