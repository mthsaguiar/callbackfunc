import React, { Component } from 'react';
import './Callback.css';

class Callback2 extends Component {
        
    
    state={
        isTurnedOn: true,
      }
      
    handleClick() {
      this.setState(state => ({
        isTurnedOn: !state.isTurnedOn
      }));
    }
  render(){
    return(
      <div className="app-container">
        <article>
          <button onClick={(e)=>this.handleClick(e)}>
            <p>
            {this.state.isTurnedOn ? 'ON' : 'OFF'}
            </p>
          </button>
        </article>
      </div>
    );
  }

}
export default Callback2;
