import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { startEditGroup } from '../actions/user';

export class ViewGroupPage extends React.Component {
  onAdd = (expense) => {
    this.props.startEditGroup(this.props.expense.id, true);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startEditGroup(this.props.expense.id, false);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">View Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <div>
            <h1>{this.props.expense.description}</h1>
            <p>Amount: {this.props.expense.amount}</p>
            <p>Created: {this.props.expense.createdAt}</p>
            <p>Note: {this.props.expense.note}</p>
          </div>
          <div>
            <button className="button" onClick={this.onAdd}>Add Expense to Profile</button>
            <button className="button button--secondary" onClick={this.onRemove}>Remove Expense from Profile</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditGroup: (id, bool) => dispatch(startEditGroup(id, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroupPage);