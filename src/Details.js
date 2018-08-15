import React, { Component } from 'react';


class Details extends Component {
    render() { 
        return ( 
            <div style={{ textAlign: "center" }}>
                <p>First Name : {this.props.first_name}</p>
                <p>Last Name : {this.props.last_name}</p>
                <button onClick={this.props.updateData}>Update Data</button>
            </div>
        );
    }
}
 
export default Details;