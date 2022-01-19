import React, {useState} from 'react';
import Post from './Post';
import './App.css';

function App(){
    const[name,SetName] = useState("");
    const[content,SetContent] = useState("");
    const[list,setList]=useState([])
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(name,content,likes)
        const data={name,content,likes:0}
        if(name&&content){
            setList((ls)=>[...ls,data])
            SetName("")
            SetContent("")
          

        }
    }
    return(
        <div>
           
         <div className='Newpost'>
            <form onSubmit={handleSubmit}>
                <input type="text" name = "name" value={name} placeholder='Enter a name' onChange={e=>SetName(e.target.value)} />
                <br></br>
                <textarea name="content" value={content} placeholder='Enter a post' onChange={e=>SetContent(e.target.value)} >Enter comment   here</textarea>
                <br></br>
                <button>Post</button>
            </form>
            </div>

            <div className='app'>
            {
                list.map((post) =>(
                    <Post key={post.key} name={post.name} content={post.content} likes={post.likes}  />
            ))}
         </div>
        </div>
    )
}

export default App;

