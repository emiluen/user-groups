import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectGroups from '../selectors/groups';
import selectGroupsTotal from '../selectors/groups-total';

export class GroupListSummary extends React.Component {
  countGroups = () => {
    return this.props.groups.length;
  }

  totalGroups = () => {
    return selectGroupsTotal(this.props.groups);
  }

  expenseWord = () => {
    return this.countGroups() === 1 ? 'group' : 'groups';
  }

  formattedGroupsTotal = () => {
    return numeral(this.totalGroups() / 100).format('$0,0.00');
  }

  renderButton = () => {
    if (this.props.edit) {
      return (
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Group</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Viewing <span>{this.countGroups()}</span> {this.expenseWord()} totalling <span>{this.formattedGroupsTotal()}</span></h1>
          {this.renderButton()}
        </div>
      </div>
    );
  };
};

export default GroupListSummary;
