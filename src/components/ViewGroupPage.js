import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditUserGroup } from '../actions/user';

export class ViewGroupPage extends React.Component {
  renderButtons = () => {
    if (this.props.isMember) {
      return <button className="button button--secondary" onClick={this.onRemove}>Remove Group from Profile</button>;
    } else {
      return <button className="button" onClick={this.onAdd}>Add Group to Profile</button>;
    }
  };
  onAdd = () => {
    this.editGroup(true);
  };
  onRemove = () => {
    this.editGroup(false);
  };
  editGroup = (bool) => {
    this.props.startEditUserGroup(this.props.group.id, bool).then(() => {
      this.props.history.push('/');
    });
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">View Group</h1>
          </div>
        </div>
        <div className="content-container">
          <div>
            <h1>{this.props.group.description}</h1>
            <p>Amount: {this.props.group.amount}</p>
            <p>Created: {this.props.group.createdAt}</p>
            <p>Note: {this.props.group.note}</p>
          </div>
          <div>
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  let group = state.groups.find((group) => group.id === props.match.params.id);

  return ({
    group: state.groups.find((group) => group.id === props.match.params.id),
    isMember: state.user.user_groups[group.id]
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditUserGroup: (id, bool) => dispatch(startEditUserGroup(id, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroupPage);
