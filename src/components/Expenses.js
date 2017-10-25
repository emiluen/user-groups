import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const Expenses = (props) => (
  <div>
    <ExpensesSummary expenses={props.expenses} edit={props.edit} />
    <ExpenseListFilters />
    <ExpenseList expenses={props.expenses} edit={props.edit} />
  </div>
);

export default Expenses;
