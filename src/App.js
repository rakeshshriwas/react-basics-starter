import React, { Component } from 'react';
import AddToDo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      {
        taskName: "First task"
      },
      {
        taskName: "Second task"
      },
      {
        taskName: "Third task"
      }
    ]
  }

  addToDoState = addToDoTask => {
    const newToDo = this.state.todos.concat({
      taskName: addToDoTask
    });

    this.setState({ 
      todos: newToDo
     });
  }

  render() {
    return (
      <div style={{width: 500, margin: '50px auto'}}>
        <AddToDo addToDoState={this.addToDoState}/>
        <ul>
          {this.state.todos.map((todo, index) => {
            return <li key={index}>{todo.taskName}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;