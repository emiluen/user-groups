import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { startEditGroup } from '../actions/user';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  onSubmit2 = (expense) => {
    this.props.startEditGroup(this.props.expense.id, true);
    this.props.history.push('/');
  };
  onRemove2 = () => {
    this.props.startEditGroup(this.props.expense.id, false);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
        <div>
          <button className="button" onClick={this.onSubmit2}>Add as My Expense</button>
          <button className="button button--secondary" onClick={this.onRemove2}>Remove as My Expense</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  startEditGroup: (id, bool) => dispatch(startEditGroup(id, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
