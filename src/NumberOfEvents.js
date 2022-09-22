import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    EventsNumber: 32,
  };

  handleNumberChanged = (input) => {
    const value = parseInt(input.target.value);
    this.setState({ EventsNumber: value });
    this.props.updateEvents(undefined, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          placeholder="Specify Number of Events"
          onChange={this.handleNumberChanged}
          className="numberInput"
          value={this.state.EventsNumber}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
