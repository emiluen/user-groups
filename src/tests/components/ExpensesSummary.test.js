import React from 'react';
import { shallow } from 'enzyme';
import { GroupListSummary } from '../../components/GroupListSummary';

test('should correctly render GroupListSummary with 1 expense', () => {
  const wrapper = shallow(<GroupListSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render GroupListSummary with multiple expenses', () => {
  const wrapper = shallow(<GroupListSummary expenseCount={23} expensesTotal={23512340987} />);
  expect(wrapper).toMatchSnapshot();
});
