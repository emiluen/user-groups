export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_MY_GROUPS':
      console.log('action.groups', action.groups);
      let expenses2 = {
        ...action.groups
      };
      return { ...state, expenses2 };
    case 'START_ADD_MY_GROUP':
      console.log(action);
      console.log(state.groups);
      let groups = {
        ...state.groups,
        [action.id]: true
      };
      console.log('exp', groups);
      return { ...state, groups };
    case 'LOGIN':
      return { ...action.user };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
