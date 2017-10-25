import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startAddGroup } from '../actions/groups';

export class AddGroupPage extends React.Component {
  onSubmit = (group) => {
    this.props.startAddGroup(group);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Group</h1>
          </div>
        </div>
        <div className="content-container">
          <GroupForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddGroup: (group) => dispatch(startAddGroup(group))
});

export default connect(undefined, mapDispatchToProps)(AddGroupPage);
