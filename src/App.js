import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    EventsNumber: 32,
  };

  updateEvents = (location, newEventsNumber) => {
    this.setState({
      EventsNumber: newEventsNumber,
    });
    getEvents().then((events) => {
      const locationEvents =
        location === 'all'
          ? events
          : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents.slice(0, newEventsNumber),
        EventsNumber: newEventsNumber,
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
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
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
