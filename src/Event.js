import React, { Component } from 'react';
class Event extends Component {
  state = {
    showDetail: false,
  };

  handleEventDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  render() {
    const { event } = this.props;

    const date = event.start.dateTime.split('T')[0];
    const time = event.start.dateTime.split('T')[1];

    return (
      <div className="event_Overview">
        <h1 className="event__Title">{event.summary}</h1>
        {this.state.showDetail && (
          <p className="detail">
            <div className="event__Date">Date:{date}</div>
            <div className="event__Time">Time:{time}</div>
            <div className="description">Description: {event.description}</div>
          </p>
        )}

        <button className="detail-btn" onClick={this.handleEventDetail}>
          Show detail
        </button>
      </div>
    );
  }
}

export default Event;
