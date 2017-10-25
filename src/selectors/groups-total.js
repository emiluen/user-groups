export default (groups) => {
  return groups
      .map((group) => group.amount)
      .reduce((sum, value) => sum + value, 0);
};
