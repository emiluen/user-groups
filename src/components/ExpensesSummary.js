import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {
  /*
  const expenseWord = countExpenses() === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(totalExpenses() / 100).format('$0,0.00');
  */

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

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Viewing <span>{this.countExpenses()}</span> {this.expenseWord()} totalling <span>{this.formattedExpensesTotal()}</span></h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    );
  };
};

export default ExpensesSummary;
