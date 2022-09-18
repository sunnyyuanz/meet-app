import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<CitySearch /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('32 is the default number of events', () => {
    NumberOfEventsWrapper.setState({
      EventsNumber: 32,
    });
    expect(NumberOfEventsWrapper.state('EventsNumber')).toBe(32);
  });
  test('render a text input for user to specify number of events', () => {
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });
  test('change state when number input changes', () => {
    NumberOfEventsWrapper.setState({
      EventsNumber: 32,
    });
    const eventObject = { target: { value: 15 } };
    NumberOfEventsWrapper.find('.numberInput').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('EventsNumber')).toBe(15);
  });
});
