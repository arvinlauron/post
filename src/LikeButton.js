import React, {useState} from 'react';

 function LikeButton (props){
    const{likes} = props
    const[count, setCount] = useState(likes)

    const increment = () => {
        setCount(count + 1);
    }

        return (
            <div>
                <p>{count}</p>
                <button onClick={increment}>Like</button>
            </div>
        )
    }
export default LikeButton