import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {key: 1, name: "Gian", content:"Gwapa kay ka", likes:2},
        {key: 2, name: "Shad", content:"Pogi ko", likes:0},
        {key: 3, name: "Carlos", content:"Hanging around", likes:0},
        {key: 4, name: "Reyner", content:"Pagod na ako!", likes:0},
      ]
      
    }
  }
    
  render() {
    return (
      <div>
        <div className='app'>
          {this.state.posts.map(post => (
            <Post key={post.key} name={post.name} content={post.content} likes={post.likes}  />
          ))}
           
        </div>
        <div className='app'>
          <NewPost/>
        </div>       
      </div>
    );
    
  }

 
  
}


export default App;
