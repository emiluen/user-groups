export default (state = {
  user_groups: {}
}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'EDIT_USER_GROUP':
      let user_groups = {
        ...state.user_groups,
        [action.group.id]: action.group.bool
      };
      return { ...state, user_groups: user_groups};
    default:
      return state;
  }
};
