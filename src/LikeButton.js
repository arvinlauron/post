import React, {Component} from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.likes
        }
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.increment}>Like</button>
            </div>
        )
    }
}