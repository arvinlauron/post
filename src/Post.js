import React from 'react';
import LikeButton from './LikeButton'

function Post (props) {
    const{name} = props
    const{content} = props
    const{likes} = props
    
    
        return (
                <div className='post'>
                    <h3>{name}</h3>
                    <p>{content}</p>
                    <p>Number of Likes</p>
                    <LikeButton likes={likes}/>
                </div>
                
        )
    }
export default Post;

