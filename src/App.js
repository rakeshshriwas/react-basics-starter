import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "Rakesh",
      last_name: "Shriwas",
    }

    this.updateData = this.updateData.bind(this);
  }

  updateData() {
    this.setState({ 
        first_name: "Manoj",
        last_name: "Pawar"
      });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <p>First Name : {this.state.first_name}</p>
        <p>Last Name : {this.state.last_name}</p>

        <button onClick={this.updateData}>Update Data</button>
      </div>
    );
  }
}

export default App;