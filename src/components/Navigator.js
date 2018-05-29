import React, {Component} from 'react';
import {todos} from "../todos";

class Navigator extends Component {
constructor(){
    super();
    this.state = {
        todos
    };
}
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
{this.state.todos.length}
</span>
                </a>
            </nav>


        )
    }


}

export default Navigator;