import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    EventsNumber: 32,
  };

  handleNumberChanged = (input) => {
    if (!input.target.value.isNaN) {
      const userInputNum = parseInt(input.target.value);
      this.setState({ EventsNumber: userInputNum });
      this.props.updateEvents(undefined, userInputNum);
      console.log(userInputNum);
    }
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
