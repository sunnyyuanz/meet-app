import React, { Component } from 'react';

class NumberofEvents extends Component {
  state = {
    EventsNumber: 32,
  };

  handleNumberChanged = (input) => {
    const value = input.target.value;
    this.setState({ EventsNumber: value });
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          placeholder="Specify Number of Events"
          onChange={this.handleNumberChanged}
          className="numberInput"
        />
      </div>
    );
  }
}

export default NumberofEvents;
