import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then,
  }) => {
    let NumberOfEventsWrapper;
    given(
      "the user hasn't specified the numbers of events he want to see.",
      () => {}
    );

    when('the user is viewing the events.', () => {
      NumberOfEventsWrapper = mount(<NumberOfEvents />);
    });

    then('show thirty two events as default setting.', () => {
      expect(NumberOfEventsWrapper.state('EventsNumber')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let NumberOfEventsWrapper;
    let AppWrapper;
    given('the user is viewing the events.', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    });

    when('the user want to decide the number of events they want see.', () => {
      const eventObject = { target: { value: 1 } };
      NumberOfEventsWrapper.find('.numberInput').simulate(
        'change',
        eventObject
      );
    });

    then('the number of events they specified show in the app.', () => {
      const NumberOfEventsWrapperState =
        NumberOfEventsWrapper.state('EventsNumber');
      const AppWrapperState = AppWrapper.state('EventsNumber');
      expect(AppWrapperState).toEqual(NumberOfEventsWrapperState);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(
        NumberOfEventsWrapperState
      );
    });
  });
});
