import React from 'react';
import { connect } from 'react-redux';
import GroupForm from './GroupForm';
import { startEditUserGroup } from '../actions/user';

export class ViewGroupPage extends React.Component {
  state = {
    loading: false
  };
  onAdd = () => {
    this.editGroup(true);
  };
  onRemove = () => {
    this.editGroup(false);
  };
  editGroup = (bool) => {
    this.setState({ loading: true });
    this.props.startEditUserGroup(this.props.group.id, bool).then(() => {
      this.setState({ loading: false });
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
          {
            this.props.isMember ? (
              <button className="button button--secondary" onClick={this.onRemove} disabled={!this.props.isMember || this.state.loading}>Remove Group from Profile</button>
            ) : (
              <button className="button" onClick={this.onAdd} disabled={this.props.isMember || this.state.loading}>Add Group to Profile</button>
            )
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  let group = state.groups.find((group) => group.id === props.match.params.id);

  return ({
    group: group,
    isMember: state.user.user_groups[group.id]
  });
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditUserGroup: (id, bool) => dispatch(startEditUserGroup(id, bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewGroupPage);
