import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export class UserExpenseList extends React.Component {
  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div className="show-for-mobile">Expenses</div>
          <div className="show-for-desktop">Expense</div>
          <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
          {
            this.props.expenses.length === 0 ? (
              <div className="list-item list-item--message">
                <span>No expenses</span>
              </div>
            ) : (
                this.props.expenses.map((expense) => {
                  let expenseId = expense.id;
                  if (this.props.groups && this.props.groups[expenseId]) {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                  }
                })
              )
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    groups: state.user.user_expenses,
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(UserExpenseList);
