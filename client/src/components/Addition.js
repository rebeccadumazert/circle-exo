import React, { Component } from 'react';
import { addTwoNumbers } from '../services/additionSrv';

export default class Addition extends Component {
  state = {
    number1: null,
    number2: null,
    result: '',
  };

  getNumber = (bind, { target: { value } }) => {
    this.setState({
      [bind]: value,
    });
  };

  sendAddition = async () => {
    const { number1, number2 } = this.state;
    const result = await addTwoNumbers(number1, number2);
    this.setState({ result });
  };

  render() {
    return (
      <div>
        <span>
          <input
            type="number"
            placeholder="0"
            onChange={this.getNumber.bind(null, 'number1')}
          />
          +
          <input
            type="number"
            placeholder="0"
            onChange={this.getNumber.bind(null, 'number2')}
          />
          <button onClick={this.sendAddition}>Additionner !</button>
          <p>{this.state.result}</p>
        </span>
      </div>
    );
  }
}
