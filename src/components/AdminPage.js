import React from 'react';
import { connect } from 'react-redux';
import selectGroups from '../selectors/groups';
import GroupListSummary from './GroupListSummary';
import GroupListFilters from './GroupListFilters';
import GroupList from './GroupList';

export const AdminPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Admin</h1>
      </div>
    </div>
    <div className="content-container">
      <GroupListSummary groups={props.groups} edit={true} />
      <GroupListFilters />
      <GroupList groups={props.groups} edit={true} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: selectGroups(state.groups, state.filters)
  };
};

export default connect(mapStateToProps)(AdminPage);
