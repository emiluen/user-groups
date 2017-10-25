import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_GROUP
export const addGroup = (group) => ({
  type: 'ADD_GROUP',
  group
});

export const startAddGroup = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const group = { description, note, amount, createdAt };

    return database.ref(`groups`).push(group).then((ref) => {
      dispatch(addGroup({
        id: ref.key,
        ...group
      }));
    });
  };
};

// REMOVE_GROUP
export const removeGroup = ({ id } = {}) => ({
  type: 'REMOVE_GROUP',
  id
});

export const startRemoveGroup = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`groups/${id}`).remove().then(() => {
      dispatch(removeGroup({ id }));
    });
  };
};

// EDIT_GROUP
export const editGroup = (id, updates) => ({
  type: 'EDIT_GROUP',
  id,
  updates
});

export const startEditGroup = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`groups/${id}`).update(updates).then(() => {
      dispatch(editGroup(id, updates));
    });
  };
};

// SET_GROUPS
export const setGroups = (groups) => ({
  type: 'SET_GROUPS',
  groups
});

export const startSetGroups = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`groups`).once('value').then((snapshot) => {
      const groups = [];

      snapshot.forEach((childSnapshot) => {
        groups.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setGroups(groups));
    });
  };
};
