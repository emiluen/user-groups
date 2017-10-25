import moment from 'moment';

// Get user's expenses

export default (expenses, user) => {
  return expenses.filter((expense) => {
    if (!user.user_expenses) {
      return false;
    }

    return user.user_expenses[expense.id];
  });
};
