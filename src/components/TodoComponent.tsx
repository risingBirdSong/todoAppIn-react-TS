import React from "react";

export interface TodoI {
  complete: boolean;
  task: string;
  description: string;
  id: number;
  removeFunc?: (id: number) => void;
}

const TodoComp = ({ props }: { props: TodoI }) => {
  let completeString = props.complete ? "yep" : "nope";

  let handleDelete = () => {
    if (typeof props.removeFunc === "function") {
      props.removeFunc(props.id);
    } else {
      console.log("no", props);
    }
  };

  return (
    <div className="todo-item">
      <h3>
        {" "}
        <span className="markerSpan"> Task -></span> {props.task}
      </h3>
      <p>
        <span className="markerSpan">Description -></span> {props.description}
      </p>
      <p>
        <span className="markerSpan"> Completed -></span> {completeString}
      </p>
      <p> the id {props.id}</p>
      <button className="MyButton">edit todo</button>
      <button onClick={handleDelete} className="MyButton">
        delete todo
      </button>
    </div>
  );
};

export { TodoComp };
