import React, { Component } from 'react';
import './Callback.css';

class Callback extends Component {
  
    constructor(props){
      super(props);
      this.state={
        isTurnedOn: true,
      }
      // Para que o this funcione dentro da callback, o 'bind' é necessário aqui
      this.handleClick = this.handleClick.bind(this);
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
          <button onClick={this.handleClick}>
            <p>
            {this.state.isTurnedOn ? 'ON' : 'OFF'}
            </p>
          </button>
        </article>
      </div>
    );
  }

}
export default Callback;
