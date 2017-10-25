import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import selectExpenses from '../selectors/expenses';
import selectUserExpenses from '../selectors/expenses-user';

export const GroupList = (props) => (
  <List expenses={props.expenses} />
);

const mapStateToProps = (state) => {
  return {
    expenses: selectUserExpenses(selectExpenses(state.expenses, state.filters), state.user)
  };
};

export default connect(mapStateToProps)(GroupList);
