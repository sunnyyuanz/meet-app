import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    locations: [],
    locationSelected: 'all',
    EventsNumber: 32,
  };

  updateEvents = (location, newEventsNumber) => {
    if (newEventsNumber === undefined) {
      newEventsNumber = this.state.EventsNumber;
    } else {
      this.setState({ EventsNumber: newEventsNumber });
    }
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    console.log('this.state.EventsNumber =' + this.state.EventsNumber);
    getEvents().then((events) => {
      let locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, newEventsNumber),
        EventsNumber: newEventsNumber,
        locationSelected: location,
      });
    });
  };

  // updateEventsNumber = (EventsNumber) => {
  //   this.setState({
  //     EventsNumber: EventsNumber,
  //   });
  // };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({
        events: events.slice(0, this.state.EventsNumber),
        locations: extractLocations(events),
      });
    });

    if (!navigator.onLine) {
      this.setState({
        warningText: 'Warning! Offline data might be outdated.',
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        {!this.state.warningText ? (
          <WarningAlert text={this.state.warningtext} />
        ) : (
          <></>
        )}

        <WarningAlert text={this.state.warningtext} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          EventsNumber={this.state.EventsNumber}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
