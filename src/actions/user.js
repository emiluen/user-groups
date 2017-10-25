import uuid from 'uuid';
import database from '../firebase/firebase';

// TODO: If Group is removed, the id should be removed from user too...

// EDIT_USER_GROUP
export const editUserGroup = (group) => ({
  type: 'EDIT_USER_GROUP',
  group
});

export const startEditUserGroup = (id, bool) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/user_groups/${id}`).set(bool).then((snapshot) => {
      dispatch(editUserGroup({ id, bool }));
    });
  };
};

// SET_USER
export const setUser = (user) => ({
  type: 'SET_USER',
  user
});

export const startSetUser = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}`).once('value').then((snapshot) => {
      const groups = [];

      dispatch(setUser(snapshot.val()));
    });
  };
};
