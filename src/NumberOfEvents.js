import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    EventsNumber: 32,
  };

  handleNumberChanged = (input) => {
    const userInputNum = parseInt(input.target.value);
    if (!input.target.value.isNaN) {
      this.setState({ EventsNumber: userInputNum, errorText: '' });
      this.props.updateEvents(undefined, userInputNum);
      console.log(userInputNum);
    }
    if (userInputNum < 1 || userInputNum > 32) {
      this.setState({ errorText: 'Select number from 1 to 32' });
    }
  };

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
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
