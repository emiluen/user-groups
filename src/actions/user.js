import uuid from 'uuid';
import database from '../firebase/firebase';

// EDIT_USER_GROUP
export const editGroup = (expense) => ({
  type: 'EDIT_USER_GROUP',
  expense
});

export const startEditGroup = (id, bool) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/user_expenses/${id}`).set(bool).then((snapshot) => {
      dispatch(editGroup({ id, bool }));
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
      const expenses = [];

      dispatch(setUser(snapshot.val()));
    });
  };
};
