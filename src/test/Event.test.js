import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });
  test('renders event title', () => {
    expect(EventWrapper.find('.event__Title')).toHaveLength(1);
  });
  test('renders a Detail button', () => {
    expect(EventWrapper.find('.detail-btn')).toHaveLength(1);
  });
  test('event detail is hided by default', () => {
    expect(EventWrapper.state('showDetail')).toBe(false);
  });
  test('render event details when button is clicked', () => {
    EventWrapper.setState({
      showDetail: false,
    });
    EventWrapper.find('.detail-btn').simulate('click');
    expect(EventWrapper.state('showDetail')).toBe(true);
  });
});
