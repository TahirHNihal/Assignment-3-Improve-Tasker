// taskReducer.js
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "TOGGLE_FAVORITE":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isFavorite: !task.isFavorite }
          : task
      );
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "DELETE_ALL_TASKS":
      return [];
    default:
      return state;
  }
};

export default taskReducer;
