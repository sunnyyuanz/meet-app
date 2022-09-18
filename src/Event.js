import React, { Component } from 'react';

class Event extends Component {
  state = {
    showDetail: false,
  };

  handleEventDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  render() {
    return (
      <div>
        <h1 className="title"></h1>
        {this.state.showDetail && (
          <p className="detail">
            <div>Date: </div>
            <div>description: </div>
          </p>
        )}

        <button className="detailButton" onClick={this.handleEventDetail}>
          Show Detail
        </button>
      </div>
    );
  }
}

export default Event;
