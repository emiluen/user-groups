import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_GROUP
const addGroup = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_GROUP',
  group: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_GROUP
const removeGroup = ({ id } = {}) => ({
  type: 'REMOVE_GROUP',
  id
});

// EDIT_GROUP
const editGroup = (id, updates) => ({
  type: 'EDIT_GROUP',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Groups Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
        ...state,
        action.group
      ];
    case 'REMOVE_GROUP':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_GROUP':
      return state.map((group) => {
        if (group.id === action.id) {
          return {
            ...group,
            ...action.updates
          };
        } else {
          return group;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible groups
const getVisibleGroups = (groups, { text, sortBy, startDate, endDate }) => {
  return groups.filter((group) => {
    const startDateMatch = typeof startDate !== 'number' || group.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || group.createdAt <= endDate;
    const textMatch = group.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation

const store = createStore(
  combineReducers({
    groups: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleGroups = getVisibleGroups(state.groups, state.filters);
  console.log(visibleGroups);
});

const expenseOne = store.dispatch(addGroup({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addGroup({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeGroup({ id: expenseOne.group.id }));
// store.dispatch(editGroup(expenseTwo.group.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

const demoState = {
  groups: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
