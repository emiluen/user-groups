import React from 'react';
import { connect } from 'react-redux';
import GroupList from './GroupList';
import UserExpenseList from './UserExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

export class UserPage extends React.Component {
  /*
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  */
  componentDidMount() {
    console.log('final groups', this.props.groups);
  }

  componentDidUpdate() {
    console.log('final groups', this.props.groups);
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">My Profile</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpensesSummary />
          <ExpenseListFilters />

          <h3>
            GroupList
          </h3>

          <GroupList />

          <h3>
            UserExpenseList
          </h3>
          <UserExpenseList />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  groups: state.groups
});

/*
const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});
*/

export default connect(mapStateToProps)(UserPage);
