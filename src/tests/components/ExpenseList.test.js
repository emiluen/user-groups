import React from 'react';
import { shallow } from 'enzyme';
import { GroupList } from '../../components/GroupList';
import expenses from '../fixtures/expenses';

test('should render GroupList with expenses', () => {
  const wrapper = shallow(<GroupList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render GroupList with empty message', () => {
  const wrapper = shallow(<GroupList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
