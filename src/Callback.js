import React, { Component } from 'react';
import './Callback.css';

class Callback extends Component {
  
    state = {
      isTurnOn: true,
    };
  
  handleClick = () => {
    this.setState(prevState=>({
      isTurnOn: !prevState.isTurnOn
    }));
  };

  render(){
    return(
      <div className="app-container">
        <form>
          <button onClick={this.handleClick}>
            <p>
            {this.state.isTurnOn ? 'ON' : 'OFF'}
            </p>
          </button>
        </form>
      </div>
    );
  }

}
export default Callback;
