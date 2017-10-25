import React from 'react';
import { connect } from 'react-redux';
import Expenses from './Expenses';
import selectExpenses from '../selectors/expenses';

export const AdminPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Admin</h1>
      </div>
    </div>
    <div className="content-container">
      <Expenses expenses={props.expenses} edit={true} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(AdminPage);
