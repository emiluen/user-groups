import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectGroups from '../selectors/groups';
import selectUserGroups from '../selectors/groups-user';
import GroupListSummary from './GroupListSummary';
import GroupList from './GroupList';

const UserPage = ({ groups }) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">User</h1>
      </div>
    </div>
    <div className="content-container">
      {
        groups.length ? (
          <div>
            <GroupListSummary groups={groups} edit={false} />
            <GroupList groups={groups} edit={false} />
          </div>
        ) : (
          <div className="placeholder">
            <div className="placeholder__box">
              <h3 className="placeholder__title">You don't have any groups.</h3>
              <Link className="button" to="/groups">Find Groups</Link>
            </div>
          </div>
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: selectUserGroups(selectGroups(state.groups, state.filters), state.user)
  };
};

export default connect(mapStateToProps)(UserPage);
