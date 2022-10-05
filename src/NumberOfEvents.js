import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

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
    if (input.target.value > 32 || input.target.value < 1) {
      this.setState({ infoText: 'Select number from 1 to 32' });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.infoText} />
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
