import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditGroup, startRemoveGroup } from '../actions/groups';

export class EditGroupPage extends React.Component {
  onSubmit = (group) => {
    this.props.startEditGroup(this.props.group.id, group);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveGroup({ id: this.props.group.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Group</h1>
          </div>
        </div>
        <div className="content-container">
          <GroupForm
            group={this.props.group}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Group</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  group: state.groups.find((group) => group.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditGroup: (id, group) => dispatch(startEditGroup(id, group)),
  startRemoveGroup: (data) => dispatch(startRemoveGroup(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupPage);
