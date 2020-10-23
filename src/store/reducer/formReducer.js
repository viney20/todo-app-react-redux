const intialState = {
  todo: [],
  login: false,
  edit: false,
};
const Reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(state);
      return { ...state, todo: [...state.todo, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.delete),
      };
    case "CHECKED":
      return {
        ...state,
        todo: state.todo.map((el) => {
          if (el.id === action.id) {
            el.done = action.check;
          }
          return el;
        }),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todo: state.todo.map((el) => {
          if (el.id === action.payload.id) {
            el.title = action.payload.title;
            el.desc = action.payload.desc;
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default Reducer;
