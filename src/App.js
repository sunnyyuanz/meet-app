import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import { WarningAlert } from './Alert';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(',').shift();
      return { city, number };
    });
    return data;
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
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
        <h4>Events in each city</h4>
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" type="category" name="city" />
            <YAxis
              dataKey="number"
              type="number"
              name="number of events"
              allowDecimals={false}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
            <Scatter data={this.getData()} fill="#82ca9d" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
