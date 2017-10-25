import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import GroupListItem from './GroupListItem';

const GroupList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Groups</div>
      <div className="show-for-desktop">Group</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.groups.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No groups</span>
          </div>
        ) : (
            props.groups.map((group) => {
              return <GroupListItem key={group.id} {...group} edit={props.edit} />;
            })
          )
      }
    </div>
  </div>
);

export default GroupList;
