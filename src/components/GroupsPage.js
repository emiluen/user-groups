import React from 'react';
import { connect } from 'react-redux';
import selectGroups from '../selectors/groups';
import GroupListFilters from './GroupListFilters';
import GroupList from './GroupList';

const GroupsPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Groups</h1>
      </div>
    </div>
    <div className="content-container">
      <GroupListFilters />
      <GroupList groups={props.groups} edit={false} />
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    groups: selectGroups(state.groups, state.filters)
  };
};

export default connect(mapStateToProps)(GroupsPage);
