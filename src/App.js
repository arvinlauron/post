import React, { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import './App.css';


function App() {
  const [posts] = useState(
    [
      {key: 1, name: "Gian", content:"Gwapa kay ka", likes:2},
      {key: 2, name: "Shad", content:"Pogi ko", likes:0},
      {key: 3, name: "Carlos", content:"Hanging around", likes:0},
      {key: 4, name: "Reyner", content:"Pagod na ako!", likes:0},
    ]
  );

    return (
      <div className='container'>
         <NewPost />
        <div className='app'>
          {posts.map(post => (
            <Post key={post.key} name={post.name} content={post.content} likes={post.likes}  />
          ))}
           
        </div> 
         
      </div>
    );
    
  }

 export default App;
