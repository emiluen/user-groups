import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import GroupListItem from '../../components/GroupListItem';

test('should render GroupListItem correctly', () => {
  const wrapper = shallow(<GroupListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
