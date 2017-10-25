export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MY_EXPENSES':
      console.log('action.expenses', action.expenses);
      let expenses2 = {
        ...action.expenses
      };
      return { ...state, expenses2 };
    case 'START_ADD_MY_EXPENSE':
      console.log(action);
      console.log(state.expenses);
      let expenses = {
        ...state.expenses,
        [action.id]: true
      };
      console.log('exp', expenses);
      return { ...state, expenses };
    case 'LOGIN':
      return { ...action.user };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
