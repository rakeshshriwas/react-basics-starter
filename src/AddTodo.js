import React, { Component } from 'react';

class AddTodo extends Component {
    
    state = {
        toDotask: ""
    }

    sumbitHandler = (event) => {
        event.preventDefault();
        this.props.addToDoState(this.state.toDotask);

        this.setState({ 
            toDotask: '' 
        });
    }

    changeToDoTask = (event) => {
        this.setState({ 
            toDotask: event.target.value
         });
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.sumbitHandler}>
                    <input type="text" value={this.state.toDotask} onChange={this.changeToDoTask}/>
                    <button type="submit">Add task</button>
                </form>
            </div>
         );
    }
}
 
export default AddTodo;