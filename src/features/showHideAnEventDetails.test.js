import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('An event element is collapsed by default', () => {});
    let AppWrapper;
    let eventWrapper;
    when('the user just open the app.', () => {
      AppWrapper = mount(<App />);
      eventWrapper = shallow(<Event event={mockData[1]} />);
    });
    then(
      'the user should see an event of the closest date is collapsing to show the details by default.',
      () => {
        eventWrapper.update();
        expect(eventWrapper.find('.event_Overview .detail')).toHaveLength(0);
      }
    );
  });

  test('User can expand an event to see its details.', ({
    given,
    when,
    then,
  }) => {
    let eventWrapper;
    given(
      'main page is open and events are showing the title but no details.',
      () => {
        eventWrapper = shallow(<Event event={mockData[1]} />);
        eventWrapper.update();
        expect(eventWrapper.find('.event_Overview .event__Title')).toHaveLength(
          1
        );
        expect(eventWrapper.find('.event_Overview .detail')).toHaveLength(0);
      }
    );

    when('the user click into a specific event title.', () => {
      eventWrapper.find('.detail-btn').at(0).simulate('click');
    });

    then(
      'the user should see the details of the event which just clicked.',
      () => {
        eventWrapper.update();
        expect(eventWrapper.find('.event_Overview .detail')).toHaveLength(1);
      }
    );
  });
  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let eventWrapper;
    given('an event is clicked to collapse.', () => {
      eventWrapper = shallow(<Event event={mockData[1]} />);
      eventWrapper.find('.detail-btn').at(0).simulate('click');
    });

    when('the user click on the event tile again.', () => {
      eventWrapper.update();
      eventWrapper.find('.detail-btn').at(0).simulate('click');
    });

    then(
      "the event should hide it's detail and only show the event title.",
      () => {
        expect(eventWrapper.find('.event_Overview .detail')).toHaveLength(0);
      }
    );
  });
});
