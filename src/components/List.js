import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const List = (props) => (
  <div>
    <ExpensesSummary expenses={props.expenses} edit={props.edit} />
    <ExpenseListFilters />

    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {
          props.expenses.length === 0 ? (
            <div className="list-item list-item--message">
              <span>No expenses</span>
            </div>
          ) : (
              props.expenses.map((expense) => {
                return (
                  <div key={expense.id}>
                    {props.edit}
                    <ExpenseListItem key={expense.id} {...expense} edit={props.edit} />
                  </div>
                );
              })
            )
        }
      </div>
    </div>
  </div>
);

export default List;
