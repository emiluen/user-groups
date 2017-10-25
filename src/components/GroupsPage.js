import React from 'react';
import { connect } from 'react-redux';
import Groups from './Groups';
import selectExpenses from '../selectors/expenses';

const GroupsPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Groups</h1>
      </div>
    </div>
    <div className="content-container">
      <Groups expenses={props.expenses} edit={false} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(GroupsPage);
