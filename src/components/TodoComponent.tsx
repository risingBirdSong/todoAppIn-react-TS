import React from "react";

export interface TodoI {
  complete: boolean;
  task: string;
  description: string;
  id : number;
}

const TodoComp = ({ props }: { props: TodoI }) => {
  let completeString = props.complete ? "yep" : "nope";

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
      <button className="MyButton">edit todo</button>
      <button className="MyButton">delete todo</button>
    </div>
  );
};

export { TodoComp };
