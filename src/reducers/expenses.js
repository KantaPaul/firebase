// expenses reducers
let expenseReducersDefaultState = [];

let expenseReducers = (state = expenseReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expenses)
      return [
        ...state,
        action.expenses
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => {
        return id !== action.id
      })
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expenseReducers;