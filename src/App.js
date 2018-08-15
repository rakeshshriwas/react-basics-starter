import React, { Component } from 'react';
import Details from './Details';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "Rakesh",
      last_name: "Shriwas"
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
      <Details first_name={this.state.first_name} last_name={this.state.last_name} updateData={this.updateData}/>
    );
  }
}

export default App;