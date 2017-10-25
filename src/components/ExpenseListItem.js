import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt, edit }) => {
  const getLink = () => {
    if (edit) {
      return `/edit/${id}`;
    }

    return `/view/${id}`;
  }

  return (
    <Link className="list-item" to={getLink()}>
      <div>
        <div>Edit: {edit}</div>
        <h3 className="list-item__title">{description}</h3>
        <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
      </div>
      <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
  );
};

export default ExpenseListItem;
