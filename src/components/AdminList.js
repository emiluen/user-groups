import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <List expenses={props.expenses} edit={true} />
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
