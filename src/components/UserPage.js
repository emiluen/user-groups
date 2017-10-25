import React from 'react';
import { connect } from 'react-redux';
import Groups from './Groups';
import selectGroups from '../selectors/groups';
import selectUserGroups from '../selectors/groups-user';

const UserPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">User</h1>
      </div>
    </div>
    <div className="content-container">
      <Groups groups={props.groups} edit={false} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: selectUserGroups(selectGroups(state.groups, state.filters), state.user)
  };
};

export default connect(mapStateToProps)(UserPage);
