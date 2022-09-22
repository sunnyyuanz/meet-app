import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('renders specify number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);

    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );

    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];
    // handleItemClicked in App.js is the async piece of code, which is the exact reason why you needed to add await before below code.
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const suggestionItems = CitySearchWrapper.find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('App Passes default "TotalEventsShowing" state as a prop to NumberOfEvent', async () => {
    const AppWrapper = mount(<App />);
    const AppTotalEventsShowingState = AppWrapper.state('EventsNumber');
    const NumberOfEventWrapper = AppWrapper.find(NumberOfEvents);
    expect(AppTotalEventsShowingState).not.toEqual(undefined);
    expect(NumberOfEventWrapper.props().EventsNumber).toEqual(
      AppTotalEventsShowingState
    );
    AppWrapper.unmount();
  });

  test('NumberOfEvents Passes back the specified number of EventsNumber', async () => {
    const AppWrapper = mount(<App />);
    const AppTotalEventsShowingState = AppWrapper.state('EventsNumber');
    const NumberOfEventWrapper = AppWrapper.find(NumberOfEvents);
    await NumberOfEventWrapper.find('.numberInput')
      .at(0)
      .simulate('change', { target: { value: 32 } });
    expect(AppTotalEventsShowingState).not.toEqual(undefined);
    expect(AppTotalEventsShowingState).toEqual(
      NumberOfEventWrapper.state('EventsNumber')
    );
    AppWrapper.unmount();
  });
});
