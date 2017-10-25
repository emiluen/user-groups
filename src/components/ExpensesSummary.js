import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
  countExpenses = () => {
    console.log('countExpenses');
    return this.props.expenses.length;
  }

  totalExpenses = () => {
    return selectExpensesTotal(this.props.expenses);
  }

  expenseWord = () => {
    return this.countExpenses() === 1 ? 'expense' : 'expenses';
  }

  formattedExpensesTotal = () => {
    return numeral(this.totalExpenses() / 100).format('$0,0.00');
  }

  renderButton = () => {
    if (this.props.edit) {
      return (
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Viewing <span>{this.countExpenses()}</span> {this.expenseWord()} totalling <span>{this.formattedExpensesTotal()}</span></h1>
          {this.renderButton()}
        </div>
      </div>
    );
  };
};

export default ExpensesSummary;
