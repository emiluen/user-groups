export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'EDIT_USER_GROUP':
      let user_expenses = {
        ...state.user_expenses,
        [action.expense.id]: action.expense.bool
      };
      return { ...state, user_expenses: user_expenses};
    default:
      return state;
  }
};
