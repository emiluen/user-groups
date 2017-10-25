import moment from 'moment';

// Get user's groups

export default (groups, user) => {
  return groups.filter((group) => {
    if (!user.user_groups) {
      return false;
    }

    return user.user_groups[group.id];
  });
};
