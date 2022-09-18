import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberofEvents from './NumberOfEvents';

function App() {
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberofEvents />
    </div>
  );
}

export default App;
