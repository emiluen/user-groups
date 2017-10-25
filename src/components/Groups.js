import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import GroupList from './GroupList';
import GroupListItem from './GroupListItem';
import GroupListFilters from './GroupListFilters';
import GroupListSummary from './GroupListSummary';

const Groups = (props) => (
  <div>
    <GroupListSummary expenses={props.expenses} edit={props.edit} />
    <GroupListFilters />
    <GroupList expenses={props.expenses} edit={props.edit} />
  </div>
);

export default Groups;
