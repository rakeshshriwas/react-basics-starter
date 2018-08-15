import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "Rakesh",
      last_name: "Shriwas",
    }
  }

  render() {
    return ( 
      <div style = {{textAlign: "center"}}>
        <p>First Name : {this.state.first_name}</p>
        <p>Last Name : {this.state.last_name}</p>
      </div>
     );
  }
}

export default App;