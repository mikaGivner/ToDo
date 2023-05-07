import React from "react";
import { useSelector, useDispatch } from "react-redux";
function Create() {
  const dispatch = useDispatch();
  //const counter = useSelector((state) => state.counter);
  const task = useSelector((state) => state.task);

  const Add = () => {
    dispatch({ type: "ADD", theTask: "task " });
  };
  const Delete = () => {
    dispatch({ type: "DELETE" });
  };
  return (
    <>
      <button onClick={Add}>Add</button>
      <button onClick={Delete}>DELETE</button>

      <div>{task}</div>
    </>
  );
}

export default Create;
