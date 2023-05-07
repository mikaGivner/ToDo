import { createStore } from "redux";
const reducerFu = (state = { task: [] }, action) => {
  if (action.type === "ADD") {
    state.task = [...state.task, action.theTask];
    let arr = state.task.map((task, i) => {
      return <div key={i}>{task}</div>;
    });
    return { task: arr };
  }
  if (action.type === "DELETE") {
    if (state.task.length > 0) {
      state.task.pop();
    }

    let arr = state.task.map((task, i) => {
      return <div key={i}>{task}</div>;
    });
    return { task: arr };
  }

  return state;
};

const store = createStore(reducerFu);
export default store;
