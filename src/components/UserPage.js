import React from 'react';
import { connect } from 'react-redux';
import Groups from './Groups';
import selectExpenses from '../selectors/expenses';
import selectUserExpenses from '../selectors/expenses-user';

const UserPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">User</h1>
      </div>
    </div>
    <div className="content-container">
      <Groups expenses={props.expenses} edit={false} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectUserExpenses(selectExpenses(state.expenses, state.filters), state.user)
  };
};

export default connect(mapStateToProps)(UserPage);
